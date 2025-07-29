const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const dotenv = require('dotenv');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
// app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

const allowedOrigins = ['https://masjid-khalid.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// SQLite setup
let db;
(async () => {
  db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });
  // (async () => {
  //   await db.run("UPDATE users SET isAdmin = 1 WHERE email = 'adminmasjid100@gmail.com'");
  //   console.log('✔️ تم تعيين المستخدم كـ Admin');
  // })();
  // db.run(
  //   `CREATE TABLE IF NOT EXISTS khatib (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     name TEXT,
  //     description TEXT,
  //     date TEXT,
  //     image TEXT
  //  )`
  // , (err) => {
  //   if (err) {
  //     console.error('❌ خطأ في إنشاء جدول khatib:', err.message);
  //   } else {
  //     console.log('✅ تم التأكد من وجود جدول khatib (أو إنشاؤه إذا لم يكن موجوداً).');
  //   }
  // });

  // db.run(
  //   `CREATE TABLE IF NOT EXISTS lessons (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     title TEXT NOT NULL,
  //     description TEXT NOT NULL,
  //     videoUrl TEXT NOT NULL,
  //     createdAt TEXT DEFAULT (datetime('now'))
  //   )`
  // , (err) => {
  //   if (err) {
  //     console.error("فشل في إنشاء جدول الدروس:", err.message);
  //   } else {
  //     console.log("تم إنشاء جدول الدروس بنجاح (أو موجود بالفعل).");
  //   }
  // });
   dotenv.config();
  await db.exec(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      isAdmin BOOLEAN DEFAULT 0
    )`
  );

  await db.exec(
    `CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      image TEXT,
      date TEXT
    )`
  );
})();

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'secret1234567890';

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// -------- API Routes --------

// Register
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
    const token = jwt.sign({ id: result.lastID, email }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Email already exists' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET);
  res.json({ token });
});

// Auth Middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};

// Get all activities
app.get('/api/activities', async (req, res) => {
  try{
  const activities = await db.all('SELECT * FROM activities ORDER BY id DESC');
  res.json(activities);
  }catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'حدث خطأ أثناء جلب بيانات الخطيب' });
  }
});

// Add new activity (admin only)
app.post('/api/activities', authenticate, async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);

  const { title, description, date, image } = req.body;

  try {
    await db.run(
      'INSERT INTO activities (title, description, image, date) VALUES (?, ?, ?, ?)',
      [title, description, image, date]
    );

    res.json({ message: 'تمت إضافة النشاط بنجاح' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'حدث خطأ أثناء إضافة النشاط' });
  }
});

// تعديل معلومات خطيب الجمعة (للمسؤول فقط)
app.post('/api/khatib', authenticate, async (req, res) => {
  // تأكد أن المستخدم Admin
  if (!req.user.isAdmin) return res.sendStatus(403);

  const { name, description, date, image } = req.body;

  try {
    // حذف السجل السابق (نفترض أنه سجل واحد فقط)
    await db.run('DELETE FROM khatib');

    // إدخال بيانات جديدة
    await db.run(
      'INSERT INTO khatib (name, description, date, image) VALUES (?, ?, ?, ?)',
      [name, description, date, image]
    );

    res.json({ message: 'تم حفظ معلومات الخطيب بنجاح' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'حدث خطأ أثناء حفظ بيانات الخطيب' });
  }
});

// جلب معلومات خطيب الجمعة
app.get('/api/khatib', async (req, res) => {
  try {
    const khatib = await db.get('SELECT * FROM khatib ORDER BY id DESC LIMIT 1');
    
    if (!khatib) {
      return res.status(404).json({ message: 'لم يتم العثور على بيانات الخطيب' });
    }

    res.json(khatib);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'حدث خطأ أثناء جلب بيانات الخطيب' });
  }
});

//api/post/lesson
app.post('/api/lessons', authenticate, async (req, res) => {
 
  if (!req.user.isAdmin) return res.sendStatus(403); // رفض إذا لم يكن admin

  const { title, description, videoUrl } = req.body;

  try {
    await db.run(
      'INSERT INTO lessons (title, description, videoUrl) VALUES (?, ?, ?)',
      [title, description, videoUrl]
    );

    res.json({ message: 'تمت إضافة الدرس بنجاح' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ message: 'حدث خطأ أثناء إضافة الدرس' });
  }
});

//api/get/lesson
app.get('/api/lessons', async (req, res) => {
  try {
    const lessons = await db.all("SELECT * FROM lessons ORDER BY createdAt DESC");
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: "خطأ في جلب الدروس" });
  }
});

// DELETE /api/activities/:id
app.delete('/api/activities/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM activities WHERE id = ?';
  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'فشل في حذف النشاط' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: 'النشاط غير موجود' });
    }

    res.json({ message: 'تم حذف النشاط بنجاح' });
  });
});

// مثال: DELETE /api/lessons/:id
app.delete('/api/lessons/:id', (req, res) => {
  const lessonId = req.params.id;

  const sql = 'DELETE FROM lessons WHERE id = ?';
  db.run(sql, [lessonId], function (err) {
    if (err) {
      console.error('Error deleting lesson:', err);
      return res.status(500).json({ error: 'فشل الحذف' });
    }
    res.status(200).json({ message: 'تم حذف الدرس بنجاح' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});