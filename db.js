// db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://masjid_db_user:cqbmQHhbVnJgxn4kfPczEmw0Z4kKW78R@dpg-d24grm8gjchc73ab0eag-a.oregon-postgres.render.com/masjid_db',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
