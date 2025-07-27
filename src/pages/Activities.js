// // import React, { useEffect, useState } from 'react';
// // import { useTranslation } from 'react-i18next';
// // import { db, auth } from '../firebase';
// // import {
// //   collection,
// //   getDocs,
// //   addDoc,
// //   serverTimestamp,
// // } from 'firebase/firestore';
// // import { onAuthStateChanged } from 'firebase/auth';
// // import Header from '../Components/Layouts/Header';
// // import Footer from '../Components/Layouts/Footer';

// // function Activities() {
// //   const { t } = useTranslation();
// //   const [activities, setActivities] = useState([]);
// //   const [newActivity, setNewActivity] = useState({
// //     title: '',
// //     description: '',
// //     date: '',
// //     imageFile: null,
// //   });
// //   const [user, setUser] = useState(null);
// //   const [isAdmin, setIsAdmin] = useState(false);

// //   const adminEmail = 'adminmasjid100@gmail.com'; // إيميل المدير

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (userData) => {
// //       if (userData) {
// //         setUser(userData);
// //         setIsAdmin(userData.email === adminEmail);
// //       } else {
// //         setUser(null);
// //         setIsAdmin(false);
// //       }
// //     });

// //     fetchActivities();

// //     return () => unsubscribe();
// //   }, []);

// //   const fetchActivities = async () => {
// //     const snapshot = await getDocs(collection(db, 'activities'));
// //     const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// //     setActivities(data);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewActivity((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     setNewActivity((prev) => ({ ...prev, imageFile: file }));
// //   };

// //   const uploadImageToCloudinary = async (file) => {
// //     const formData = new FormData();
// //     formData.append('file', file);
// //     formData.append('upload_preset', 'masjid_unsigned'); // ✅ اسم preset الصحيح

// //     const response = await fetch('https://api.cloudinary.com/v1_1/ddiryl2u3/image/upload', {
// //       method: 'POST',
// //       body: formData,
// //     });

// //     const data = await response.json();

// //     if (data.secure_url) {
// //       return data.secure_url;
// //     } else {
// //       console.error('فشل رفع الصورة:', data);
// //       return '';
// //     }
// //   };

// //   const addActivity = async () => {
// //     try {
// //       let imageUrl = '';

// //       if (newActivity.imageFile) {
// //         imageUrl = await uploadImageToCloudinary(newActivity.imageFile);
// //       }

// //       await addDoc(collection(db, 'activities'), {
// //         title: newActivity.title,
// //         description: newActivity.description,
// //         date: newActivity.date,
// //         image: imageUrl,
// //         createdAt: serverTimestamp(),
// //       });

// //       setNewActivity({ title: '', description: '', date: '', imageFile: null });
// //       fetchActivities();
// //     } catch (error) {
// //       console.error('Error adding activity:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="container">
// //         <h2 className="text-center mb-4 fw-bold text-red" style={{ fontSize: '2rem' }}>
// //           {t('activities')}
// //         </h2>

// //         {isAdmin && (
// //           <div className="card p-3 mb-4 shadow">
// //             <h5 className="mb-3 fw-bold">{t('add_activity')}</h5>
// //             <form onSubmit={addActivity}>
// //             <input
// //               type="text"
// //               name="title"
// //               placeholder={t('title')}
// //               className="form-control mb-2"
// //               value={newActivity.title}
// //               onChange={handleChange}
// //               required
// //             />
// //             <textarea
// //               name="description"
// //               placeholder={t('description')}
// //               className="form-control mb-2"
// //               value={newActivity.description}
// //               onChange={handleChange}
// //               required
// //             ></textarea>
// //             <input
// //               type="text"
// //               name="date"
// //               placeholder="تاريخ النشاط"
// //               className="form-control mb-2"
// //               value={newActivity.date}
// //               onChange={handleChange}
// //               required
// //             />
// //             <input
// //               type="file"
// //               accept="image/*"
// //               className="form-control mb-3"
// //               onChange={handleImageChange}
// //               required
// //             />
// //             <button
// //             type="submit"
// //               className="btn btn-success"
// //               style={{
// //                 backgroundImage: 'linear-gradient(to left, #00b09b, #6cd35f)',
// //                 border: 'none',
// //               }}
             
// //             >
// //               {t('add')}
// //             </button>
// //             </form>
// //           </div>
// //         )}

// //         <div className="row">
// //           {activities.map((act, index) => (
// //             <div className="col-md-4 mb-4" key={index}>
// //               <div className="card shadow h-100">
// //                 {act.image && (
// //                   <img
// //                     src={act.image}
// //                     className="card-img-top"
// //                     alt={act.title}
// //                     style={{ height: '250px', objectFit: 'cover' }}
// //                   />
// //                 )}
// //                 <div className="card-body">
// //                   <h5 className="card-title fw-bold mb-3">{act.title}</h5>
// //                   <p className="card-text">{act.description}</p>
// //                   <p className="card-text">{act.date}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default Activities; 


import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

function Activities() {
  const { t } = useTranslation();
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    date: '',
    imageFile: null,
  });
  const [userEmail, setUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const adminEmail = 'adminmasjid100@gmail.com';

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setUserEmail(email);
    setIsAdmin(email === adminEmail);
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/activities');
      const data = await res.json();
      console.log('dsvshcsaccvsavc ',data);
      // ترتيب من الأحدث للأقدم حسب التاريخ إن وجد
      const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setActivities(sorted);
    } catch (error) {
      console.error('فشل في جلب الأنشطة:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewActivity((prev) => ({ ...prev, imageFile: file }));
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'masjid_unsigned');

    const response = await fetch('https://api.cloudinary.com/v1_1/ddiryl2u3/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.secure_url || '';
  };

  const addActivity = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = '';
      if (newActivity.imageFile) {
        imageUrl = await uploadImageToCloudinary(newActivity.imageFile);
      }
      console.log("aclvhacccccc",imageUrl);
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newActivity.title,
          description: newActivity.description,
          date: newActivity.date,
          image: imageUrl,
        }),
      });

      if (res.ok) {
        setNewActivity({ title: '', description: '', date: '', imageFile: null });
        fetchActivities();
      } else {
        const errorData = await res.json();
        console.error('خطأ في إضافة النشاط:', errorData.message);
      }
    } catch (error) {
      console.error('فشل في إضافة النشاط:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-red" style={{ fontSize: '2rem' }}>
          {t('activities')}
        </h2>

        {isAdmin && (
          <div className="card p-3 mb-4 shadow">
            <h5 className="mb-3 fw-bold">{t('add_activity')}</h5>
            <form onSubmit={addActivity}>
              <input
                type="text"
                name="title"
                placeholder={t('title')}
                className="form-control mb-2"
                value={newActivity.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder={t('description')}
                className="form-control mb-2"
                value={newActivity.description}
                onChange={handleChange}

required
              ></textarea>
              <input
                type="text"
                name="date"
                placeholder="تاريخ النشاط"
                className="form-control mb-2"
                value={newActivity.date}
                onChange={handleChange}
                required
              />
              <input
                type="file"
                accept="image/*"
                className="form-control mb-3"
                onChange={handleImageChange}
                required
              />
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  backgroundImage: 'linear-gradient(to left, #00b09b, #6cd35f)',
                  border: 'none',
                }}
              >
                {t('add')}
              </button>
            </form>
          </div>
        )}

        <div className="row">
          {activities.map((act, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow h-100">
                {console.log(act)}
                {act.image && (
                  <img
                    src={act.image}
                    className="card-img-top"
                    alt={act.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">{act.title}</h5>
                  <p className="card-text">{act.description}</p>
                  <p className="card-text">{act.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Activities;

// // Activities.jsx
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import Header from '../Components/Layouts/Header';
// import Footer from '../Components/Layouts/Footer';

// function Activities() {
//   const { t } = useTranslation();
//   const [activities, setActivities] = useState([]);
//   const [newActivity, setNewActivity] = useState({
//     title: '',
//     description: '',
//     date: '',
//     imageFile: null,
//   });

//   const [userEmail, setUserEmail] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const payload = JSON.parse(atob(token.split('.')[1]));
//         setUserEmail(payload.email);
//         setIsAdmin(payload.isAdmin);
//       } catch (err) {
//         console.error('فشل في تحليل التوكن:', err);
//       }
//     }
//     fetchActivities();
//   }, []);

//   const fetchActivities = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/activities');
//       const data = await res.json();
//       setActivities(data);
//     } catch (error) {
//       console.error('فشل في جلب الأنشطة:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewActivity((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setNewActivity((prev) => ({ ...prev, imageFile: file }));
//   };

//   const handleAddActivity = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('title', newActivity.title);
//       formData.append('description', newActivity.description);
//       formData.append('date', newActivity.date);
//       if (newActivity.imageFile) {
//         formData.append('image', newActivity.imageFile);
//       }

//       const res = await fetch('http://localhost:5000/api/activities', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: formData,
//       });

//       if (res.ok) {
//         setNewActivity({ title: '', description: '', date: '', imageFile: null });
//         fetchActivities();
//       } else {
//         const err = await res.json();
//         console.error('فشل إضافة النشاط:', err.message);
//       }
//     } catch (error) {
//       console.error('خطأ في إضافة النشاط:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <h2 className="text-center mb-4 fw-bold text-red" style={{ fontSize: '2rem' }}>
//           {t('activities')}
//         </h2>

//         {isAdmin && (
//           <div className="card p-3 mb-4 shadow">
//             <h5 className="mb-3 fw-bold">{t('add_activity')}</h5>
//             <form onSubmit={handleAddActivity}>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder={t('title')}
//                 className="form-control mb-2"
//                 value={newActivity.title}
//                 onChange={handleChange}
//                 required
//               />
//               <textarea
//                 name="description"
//                 placeholder={t('description')}
//                 className="form-control mb-2"
//                 value={newActivity.description}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//               <input
//                 type="text"
//                 name="date"
//                 placeholder="تاريخ النشاط"
//                 className="form-control mb-2"
//                 value={newActivity.date}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="form-control mb-3"
//                 onChange={handleImageChange}

// required
//               />
//               <button
//                 type="submit"
//                 className="btn btn-success"
//                 style={{
//                   backgroundImage: 'linear-gradient(to left, #00b09b, #6cd35f)',
//                   border: 'none',
//                 }}
//               >
//                 {t('add')}
//               </button>
//             </form>
//           </div>
//         )}

//         <div className="row">
//           {activities.map((act, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card shadow h-100">
//                 {act.image && (
//                   <img
//                     src={`http://localhost:5000${act.image}`}
//                     className="card-img-top"
//                     alt={act.title}
//                     style={{ height: '250px', objectFit: 'cover' }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold mb-3">{act.title}</h5>
//                   <p className="card-text">{act.description}</p>
//                   <p className="card-text">{act.date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Activities;
