// // LessonList.jsx
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth, db } from '../../firebase';
// import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
// import Header from '../../Components/Layouts/Header';
// import Footer from '../../Components/Layouts/Footer';

// const adminEmail = "adminmasjid100@gmail.com";

// const LessonList = () => {
//   const [lessons, setLessons] = useState([]);
//   const [newLesson, setNewLesson] = useState({
//     title: '',
//     description: '',
//     videoFile: null,
//   });
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setIsAdmin(currentUser?.email === adminEmail);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const fetchLessons = async () => {
//       try {
//         const q = query(collection(db, "lessons"), orderBy("createdAt", "desc"));
//         const snapshot = await getDocs(q);
//         const fetchedLessons = snapshot.docs.map(doc => doc.data());
//         setLessons(fetchedLessons);
//       } catch (error) {
//         console.error("خطأ في جلب الدروس:", error);
//       }
//     };

//     fetchLessons();
//   }, []);

//   const handleChange = (e) => {
//     setNewLesson({ ...newLesson, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setNewLesson({ ...newLesson, videoFile: e.target.files[0] });
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!newLesson.videoFile) return alert("يرجى اختيار ملف فيديو.");

//     const formData = new FormData();
//     formData.append("file", newLesson.videoFile);
//     formData.append("upload_preset", "masjid_unsigned");
//     formData.append("folder", "lessons");

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/ddiryl2u3/video/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       const videoUrl = data.secure_url;

//       const newLessonData = {
//         title: newLesson.title,
//         description: newLesson.description,
//         videoUrl: videoUrl,
//         createdAt: new Date(),
//       };

//       try {
//         await addDoc(collection(db, "lessons"), newLessonData);
//       } catch (firestoreError) {
//         console.error("📛 خطأ من Firestore:", firestoreError);
//         alert("فشل الحفظ في Firestore");
//       }

//       alert("تم رفع الدرس وحفظه بنجاح");
//       setLessons([newLessonData, ...lessons]);
//       setNewLesson({ title: '', description: '', videoFile: null });

//     } catch (err) {
//       console.error("خطأ أثناء رفع أو حفظ الدرس:", err);
//       alert("حدث خطأ أثناء رفع الفيديو أو الحفظ.");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container mt-5 text-end" dir="rtl">
//         <h2 className="text-center mb-4 fw-bold text-red" style={{ fontSize: '2rem' }}>قائمة الدروس</h2>

//         {user && isAdmin && (
//           <div className="mb-5 p-4 border rounded bg-light shadow-sm">
//             <h4 className="mb-3">إضافة درس جديد</h4>
//             <form onSubmit={handleUpload}>
//               <div className="mb-3">
//                 <label className="form-label">عنوان الدرس</label>
//                 <input
//                   type="text"
//                   name="title"
//                   className="form-control"
//                   value={newLesson.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">وصف الدرس</label>
//                 <textarea
//                   name="description"
//                   className="form-control"
//                   value={newLesson.description}

// onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">رفع الفيديو</label>
//                 <input
//                   type="file"
//                   accept="video/*"
//                   className="form-control"
//                   onChange={handleFileChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-success">رفع الدرس</button>
//             </form>
//           </div>
//         )}

//         <div className="row">
//           {lessons.length === 0 ? (
//             <p className="text-center">لا يوجد دروس حالياً.</p>
//           ) : (
//             lessons.map((lesson, index) => (
//               <div key={index} className="col-12 mb-4">
//                 <div className="card shadow d-flex flex-column flex-md-row align-items-center p-3">
//                   <video
//                     className="w-100 w-md-50 mb-3 mb-md-0"
//                     style={{ maxWidth: "250px", borderRadius: "8px",maxHeight:'250px' }}
//                     controls
//                     src={lesson.videoUrl}
//                   >
//                     المتصفح لا يدعم تشغيل الفيديو.
//                   </video>
//                   <div className="card-body text-center text-md-end" style={{ flex: 1 }}>
//                     <h5 style={{}} className="card-title fw-bolder text-lg" >{lesson.title}</h5>
//                     <p className="card-text">{lesson.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LessonList;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';

const adminEmail = "adminmasjid100@gmail.com";

const LessonList = () => {
  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState({
    title: '',
    description: '',
    videoFile: null,
  });
  const [userEmail, setUserEmail] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
      setIsAdmin(email===adminEmail);
    
    
    
}, []);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/lessons');
        const data = await res.json();
        setLessons(data);
      } catch (error) {
        console.error("خطأ في جلب الدروس:", error);
      }
    };

    fetchLessons();
  }, []);

  const handleChange = (e) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewLesson({ ...newLesson, videoFile: e.target.files[0] });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newLesson.videoFile) return alert("يرجى اختيار ملف فيديو.");

    const formData = new FormData();
    formData.append("file", newLesson.videoFile);
    formData.append("upload_preset", "masjid_unsigned");
    formData.append("folder", "lessons");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/ddiryl2u3/video/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const videoUrl = data.secure_url;

      const token = localStorage.getItem("token");

      const lessonData = {
        title: newLesson.title,
        description: newLesson.description,
        videoUrl: videoUrl,
      };

      const apiRes = await fetch('http://localhost:5000/api/lessons', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(lessonData),
      });

      if (apiRes.status === 200) {
        alert("تم رفع الدرس بنجاح");
        setLessons([lessonData, ...lessons]);
        setNewLesson({ title: '', description: '', videoFile: null });
      } else {
        alert("فشل في حفظ الدرس");
      }

    } catch (err) {
      console.error("خطأ أثناء رفع أو حفظ الدرس:", err);
      alert("حدث خطأ أثناء رفع الفيديو أو الحفظ.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5 text-end" dir="rtl">
        <h2 className="text-center mb-4 fw-bold text-red" style={{ fontSize: '2rem' }}>قائمة الدروس</h2>

        {isAdmin && (
          <div className="mb-5 p-4 border rounded bg-light shadow-sm">
            <h4 className="mb-3">إضافة درس جديد</h4>
            <form onSubmit={handleUpload}>
              <div className="mb-3">
                <label className="form-label">عنوان الدرس</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={newLesson.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">وصف الدرس</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={newLesson.description}
                  onChange={handleChange}

required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">رفع الفيديو</label>
                <input
                  type="file"
                  accept="video/*"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">رفع الدرس</button>
            </form>
          </div>
        )}

        <div className="row">
          {lessons.length === 0 ? (
            <p className="text-center">لا يوجد دروس حالياً.</p>
          ) : (
            lessons.map((lesson, index) => (
              <div key={index} className="col-12 mb-4">
                <div className="card shadow d-flex flex-column flex-md-row align-items-center p-3">
                  <video
                    className="w-100 w-md-50 mb-3 mb-md-0"
                    style={{ maxWidth: "250px", borderRadius: "8px", maxHeight: '250px' }}
                    controls
                    src={lesson.videoUrl}
                  >
                    المتصفح لا يدعم تشغيل الفيديو.
                  </video>
                  <div className="card-body text-center text-md-end" style={{ flex: 1 }}>
                    <h5 className="card-title fw-bolder text-lg">{lesson.title}</h5>
                    <p className="card-text">{lesson.description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LessonList;