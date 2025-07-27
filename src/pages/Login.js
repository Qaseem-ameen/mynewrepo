// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import '../pages/Login/index.css'
// export default function Login() {
//   const navigate = useNavigate();

//   const [isRegister, setIsRegister] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setMessage('تم تسجيل الدخول بنجاح');
//       navigate('/home');  // تحويل بعد تسجيل الدخول
//     } catch (error) {
//       setMessage('خطأ في تسجيل الدخول: ' + error.message);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setMessage('تم إنشاء الحساب وتسجيل الدخول بنجاح');
//       navigate('/home');  // تحويل بعد إنشاء الحساب
//     } catch (error) {
//       setMessage('خطأ في إنشاء الحساب: ' + error.message);
//     }
//   };

//   return (
   
//     <div className="ll">
//     <div className="overlay">
//     <div className="Login">
         
//     <div className="wrapper">
//       <form onSubmit={handleLogin} action="">
//         <h1>تسجيل الدخول</h1>
//         <div className="input-box">
//           <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="البريد الإلكتروني" id="email" required/>
//           <span>
//           <i  class="bi bi-envelope mx-2 "></i>
//           </span>
//         </div>
//         <div className="input-box">
//           <input name="password"  onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" required/>
//          <i class="bi bi-eye-slash mx-2" id="togglePassword"></i> 
//         </div>

//         {/* <div className="remember-forget">
//         <a href="#">Forget password?</a>
//          <select onChange={(e)=>this.setState({role:e.target.value})} className="select"><option className="opt" value="As pharmacy">As pharmacy</option>
//           <option  className="opt" value="As Store">As store</option>
//           </select>
         
//         </div> */}

//         <button type="onSubmit" className="getstart"  type="submit">تسجيل</button>

//         <div className="register-link">
//           <p>ليس لديك حساب؟<Link to="/signup">إنشاء حساب</Link></p>
//           {message && <p className="mt-3 text-center text-danger">{message}</p>}
//           </div>     
          
//            </form>
//      </div>
//      </div>
//      </div>
     
//      </div>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Login/index.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://masjidkhalid.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // حفظ التوكن والبريد في localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('logged', true);

        setMessage('تم تسجيل الدخول بنجاح');
        navigate('/home');
      } else {
        setMessage(data.message || 'خطأ في تسجيل الدخول');
      }
    } catch (error) {
      setMessage('خطأ في تسجيل الدخول: ' + error.message);
    }
  };

  return (
    <div className="ll">
      <div className="overlay">
        <div className="Login">
          <div className="wrapper">
            <form onSubmit={handleLogin}>
              <h1>تسجيل الدخول</h1>

              <div className="input-box">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الإلكتروني"
                  id="email"
                  required
                />
                <span>
                  <i className="bi bi-envelope mx-2"></i>
                </span>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="كلمة المرور"
                  required
                />
                <i className="bi bi-eye-slash mx-2" id="togglePassword"></i>
              </div>

              <button type="submit" className="getstart">
                تسجيل
              </button>

              <div className="register-link">
                <p>
                  ليس لديك حساب؟ <Link to="/signup">إنشاء حساب</Link>
                </p>
                {message && <p className="mt-3 text-center text-danger">{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}