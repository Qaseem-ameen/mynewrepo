// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { db, auth } from '../firebase';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import Header from '../Components/Layouts/Header';
// import Footer from '../Components/Layouts/Footer';

// function FridayKhatib() {
//     const { t } = useTranslation();

//     const [khatib, setKhatib] = useState({
//         name: '',
//         image: '',
//         description: '',
//         date: ''
//     });

//     const [editMode, setEditMode] = useState(false);
//     const [user, setUser] = useState(null);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [uploading, setUploading] = useState(false);

//     const adminEmail = 'adminmasjid100@gmail.com'; // ✅ إيميل الأدمن

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (userData) => {
//             if (userData) {
//                 setUser(userData);
//                 setIsAdmin(userData.email === adminEmail);
//             } else {
//                 setUser(null);
//                 setIsAdmin(false);
//             }
//         });

//         fetchKhatib();
//         return () => unsubscribe();
//     }, []);

//     // ✅ جلب بيانات الخطيب
//     const fetchKhatib = async () => {
//         const docRef = doc(db, 'friday', 'khatib');
//         const snapshot = await getDoc(docRef);
//         if (snapshot.exists()) {
//             setKhatib(snapshot.data());
//         }
//     };

//     // ✅ تغيير الحقول
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setKhatib((prev) => ({ ...prev, [name]: value }));
//     };

//     // ✅ رفع الصورة إلى Cloudinary
//     const handleImageChange = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         setUploading(true);

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('upload_preset', 'masjid_unsigned');

//         try {
//             const res = await fetch('https://api.cloudinary.com/v1_1/ddiryl2u3/image/upload', {
//                 method: 'POST',
              
//                 body: formData
//             });

//             const data = await res.json();
//             if (data.secure_url) {
//                 setKhatib((prev) => ({ ...prev, image: data.secure_url }));
//             }
//         } catch (error) {
//             console.error('Upload error:', error);
//         } finally {
//             setUploading(false);
//         }
//     };

//     // ✅ حفظ البيانات في Firestore
//     const handleSave = async () => {
//         try {
//             const docRef = doc(db, 'friday', 'khatib');
//             await setDoc(docRef, khatib);
//             setEditMode(false);
//         } catch (error) {
//             console.error('Error saving khatib data:', error);
//         }
//     };

//     return (
//         <div>
//             <Header />
//             <div className="container my-5">
//                 <h2 className="text-center mb-4 text-red fw-bold" style={{ fontSize: "1.5rem" }}>
//                     {t('friday_khatib')}
//                 </h2>

//                 <div className="d-flex flex-column flex-md-row align-items-center justify-content-center shadow rounded p-4" style={{ backgroundColor: '#f9f9f9' }}>
                    
//                     {/* ✅ صورة الخطيب */}
//                     <div className="mb-4 mb-md-0 ms-md-4 text-center">
//                         <img
//                             src={khatib.image}
//                             alt={khatib.name}
//                             className="rounded-circle"
//                             style={{ width: '200px', height: '200px', objectFit: 'cover' }}
//                         />
//                     </div>

//                     {/* ✅ معلومات الخطيب */}
//                     <div className="text-md-end text-center" dir="rtl" style={{ width: "100%", maxWidth: "500px" }}>


// {editMode ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={khatib.name}
//                                     onChange={handleInputChange}
//                                     className="form-control mb-2"
//                                     placeholder="اسم الخطيب"
//                                 />
//                                 <textarea
//                                     name="description"
//                                     value={khatib.description}
//                                     onChange={handleInputChange}
//                                     className="form-control mb-2"
//                                     placeholder="وصف الخطبة"
//                                     rows="4"
//                                 />
//                                 <input
//                                     type="date"
//                                     name="date"
//                                     value={khatib.date}
//                                     onChange={handleInputChange}
//                                     className="form-control mb-2"
//                                 />
//                                 <div className="mt-2">
//                                     <input
//                                         type="file"
//                                         accept="image/*"
//                                         onChange={handleImageChange}
//                                         className="form-control"
//                                     />
//                                     {uploading && <p className="text-muted mt-1">جارٍ رفع الصورة...</p>}
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <h4 className="fw-bold">{khatib.name}</h4>
//                                 <p>{khatib.description}</p>
//                                 <p className="text-muted">{t('تاريخ')}: {khatib.date}</p>
//                             </>
//                         )}

//                         {/* ✅ زر تعديل فقط للأدمن */}
//                         {isAdmin && (
//                             <button
//                                 className="btn btn-outline-primary mt-2"
//                                 onClick={editMode ? handleSave : () => setEditMode(true)}
//                             >
//                                 {editMode ? 'حفظ' : 'تعديل المعلومات'}
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default FridayKhatib;


import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

function FridayKhatib() {
    const { t } = useTranslation();

    const [khatib, setKhatib] = useState({
        name: '',
        image: '',
        description: '',
        date: ''
    });

    const [editMode, setEditMode] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [uploading, setUploading] = useState(false);

    const adminEmail = 'adminmasjid100@gmail.com';

    useEffect(() => {
        const email = localStorage.getItem('userEmail');
         setIsAdmin(email === adminEmail);
        fetchKhatib();
    }, []);

    // ✅ جلب بيانات الخطيب من السيرفر
    const fetchKhatib = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/khatib');
            const data = await res.json();
            setKhatib(data);
        } catch (error) {
            console.error('Error fetching khatib:', error);
        }
    };

    // ✅ تغيير الحقول
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setKhatib((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ رفع الصورة إلى Cloudinary
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'masjid_unsigned');

        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/ddiryl2u3/image/upload', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.secure_url) {
                setKhatib((prev) => ({ ...prev, image: data.secure_url }));
            }
        } catch (error) {
            console.error('Upload error:', error);
        } finally {
            setUploading(false);
        }
    };

    // ✅ حفظ البيانات في السيرفر
    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            const res = await fetch('http://localhost:5000/api/khatib', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(khatib)
            });

            if (res.ok) {
                setEditMode(false);
            } else {
                console.error('Failed to save khatib');
            }
        } catch (error) {
            console.error('Error saving khatib:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container my-5">
                <h2 className="text-center mb-4 text-red fw-bold" style={{ fontSize: "1.5rem" }}>
                    {t('friday_khatib')}
                    
                </h2>

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center shadow rounded p-4" style={{ backgroundColor: '#f9f9f9' }}>
                    
                    <div className="mb-4 mb-md-0 ms-md-4 text-center">
                        <img
                            src={khatib.image}
                            alt={khatib.name}
                            className="rounded-circle"
                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="text-md-end text-center" dir="rtl" style={{ width: "100%", maxWidth: "500px" }}>
                        {editMode ? (

<>
                                <input
                                    type="text"
                                    name="name"
                                    value={khatib.name}
                                    onChange={handleInputChange}
                                    className="form-control mb-2"
                                    placeholder="اسم الخطيب"
                                />
                                <textarea
                                    name="description"
                                    value={khatib.description}
                                    onChange={handleInputChange}
                                    className="form-control mb-2"
                                    placeholder="وصف الخطبة"
                                    rows="4"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={khatib.date}
                                    onChange={handleInputChange}
                                    className="form-control mb-2"
                                />
                                <div className="mt-2">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="form-control"
                                    />
                                    {uploading && <p className="text-muted mt-1">جارٍ رفع الصورة...</p>}
                                </div>
                            </>
                        ) : (
                            <>
                                <h4 className="fw-bold">{khatib.name}</h4>
                                <p>{khatib.description}</p>
                                <p className="text-muted">{t('تاريخ')}: {khatib.date}</p>
                            </>
                        )}

                        {isAdmin && (
                            <button
                                className="btn btn-outline-primary mt-2"
                                onClick={editMode ? handleSave : () => setEditMode(true)}
                            >
                                {editMode ? 'حفظ' : 'تعديل المعلومات'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FridayKhatib;