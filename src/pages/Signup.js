// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import '../pages/Login/index.css'
// export default function Signup() {
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
//     // <div className="container" style={{ maxWidth: 400, marginTop: 50 }}>
//     //   {!isRegister && (
//     //     <>
//     //       <h3 className="mb-4 text-center">تسجيل الدخول</h3>
//     //       <form onSubmit={handleLogin}>
//     //         <input
//     //           type="email"
//     //           placeholder="البريد الإلكتروني"
//     //           className="form-control mb-3"
//     //           required
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //         />
//     //         <input
//     //           type="password"
//     //           placeholder="كلمة المرور"
//     //           className="form-control mb-3"
//     //           required
//     //           minLength={6}
//     //           value={password}
//     //           onChange={(e) => setPassword(e.target.value)}
//     //         />
//     //         <button type="submit" className="btn btn-primary w-100 mb-3">
//     //           دخول
//     //         </button>
//     //       </form>
//     //       <div className="text-center">
//     //         <button
//     //           className="btn btn-link"
//     //           onClick={() => {
//     //             setMessage('');
//     //             setIsRegister(true);
//     //           }}
//     //         >
//     //           إنشاء حساب جديد
//     //         </button>
//     //       </div>
//     //     </>
//     //   )}

//     //   {isRegister && (
//     //     <>
//     //       <h3 className="mb-4 text-center">إنشاء حساب جديد</h3>
//     //       <form onSubmit={handleRegister}>
//     //         <input
//     //           type="email"
//     //           placeholder="البريد الإلكتروني"
//     //           className="form-control mb-3"
//     //           required
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //         />
//     //         <input
//     //           type="password"
//     //           placeholder="كلمة المرور (6 أحرف على الأقل)"
//     //           className="form-control mb-3"
//     //           required
//     //           minLength={6}
//     //           value={password}
//     //           onChange={(e) => setPassword(e.target.value)}
//     //         />
//     //         <button type="submit" className="btn btn-success w-100 mb-3">
//     //           إنشاء حساب وتسجيل الدخول
//     //         </button>
//     //       </form>
//     //       <div className="text-center">
//     //         <button
//     //           className="btn btn-link"
//     //           onClick={() => {
//     //             setMessage('');
//     //             setIsRegister(false);
//     //           }}
//     //         >
//     //           العودة لتسجيل الدخول
//     //         </button>
//     //       </div>
//     //     </>
//     //   )}

//     //   {message && <p className="mt-3 text-center text-danger">{message}</p>}
//     // </div>
   
//     <div className="ll">
//     <div className="overlay">
//     <div className="Login">
         
//     <div className="wrapper">
//       <form onSubmit={handleRegister} action="">
//         <h1>إنشاء حساب</h1>
//         <div className="input-box">
//           <input type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="البريد الإلكتروني" id="email" required/>
//           <span>
//           <i  class="bi bi-envelope mx-2 "></i>
//           </span>
//         </div>
//         <div className="input-box">
//           <input name="password"  onChange={(e) => setPassword(e.target.value)} placeholder="(كلمة المرور (6 أحرف على الأقل" required/>
//          <i class="bi bi-eye-slash mx-2" id="togglePassword"></i> 
//         </div>

//         {/* <div className="remember-forget">
//         <a href="#">Forget password?</a>
//          <select onChange={(e)=>this.setState({role:e.target.value})} className="select"><option className="opt" value="As pharmacy">As pharmacy</option>
//           <option  className="opt" value="As Store">As store</option>
//           </select>
         
//         </div> */}

//         <button type="onSubmit" className="getstart"  type="submit">إنشاء</button>

//         {/* <div className="register-link">
//           <p>ليس لديك حساب؟<Link to="/signup">إنشاء حساب</Link></p>
//           {message && <p className="mt-3 text-center text-danger">{message}</p>}
//           </div>      */}
          
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

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // لو رجع التوكن أو بيانات تسجيل دخول
        localStorage.setItem('token', data.token);
        setMessage('تم إنشاء الحساب وتسجيل الدخول بنجاح');
        navigate('/home'); // تحويل بعد التسجيل
      } else {
        setMessage(data.message || 'خطأ في إنشاء الحساب');
      }
    } catch (error) {
      setMessage('خطأ في إنشاء الحساب: ' + error.message);
    }
  };

  return (
    <div className="ll">
      <div className="overlay">
        <div className="Login">
          <div className="wrapper">
            <form onSubmit={handleRegister}>
              <h1>إنشاء حساب</h1>
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
                  placeholder="كلمة المرور (6 أحرف على الأقل)"
                  required
                  minLength={6}
                />
                <i className="bi bi-eye-slash mx-2" id="togglePassword"></i>
              </div>

              <button type="submit" className="getstart">
                إنشاء
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}