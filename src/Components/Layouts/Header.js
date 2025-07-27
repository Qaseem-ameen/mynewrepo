import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import logo from '../../Assets/20250704_092917_٠٠٠٠.png';
import { FiLogOut } from 'react-icons/fi';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(null);

    const toggleHandler = () => {
        setToggle(!toggle);
    };

    const headerFixed = () => {
        const navbar = document.querySelector('.headers');
        const scrollValue = window.scrollY;
        if (scrollValue > 200) {
            navbar.classList.add('is-fixed');
            navbar.classList.remove('is-fixed-out');
        } else {
            navbar.classList.remove('is-fixed');
            navbar.classList.add('is-fixed-out');
        }
    };

    useEffect(() => {
       
            const log=  localStorage.getItem('logged');
              setUser(log);
           console.log(user);
           console.log( localStorage.getItem('logged'));

        window.addEventListener('scroll', headerFixed);
        return () => {
            window.removeEventListener('scroll', headerFixed);
           
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('خطأ أثناء تسجيل الخروج:', error);
        }
    };

    const menuName = [
        { name: 'الصفحة الرئيسية', to: '/home' },
        { name: 'الأنشطة', to: '/activities' },
        { name: 'الإمام', to: '/Imam' },
        { name: 'خطيب الجمعة', to: '/fridayKhatib' },
        { name: 'مواقيت الصلاة', to: '/prayers' },
        { name: 'قائمة الدروس ', to: '/lessonlist' }
    ];

    return (
        <div className="headers w-full">
            <nav className="relative bg-white block lg:flex items-center justify-between flex-wrap w-full py-3 md:py-6 px-2">
                <div className="flex justify-between" style={{ direction: 'rtl' }}>
                    <div className="flex items-center gap-2">
                        <img style={{ width: '50px' }} src={logo} alt="شعار المسجد" />
                        <div className="flex items-center flex-shrink-0 text-red text-xl font-bold">
                            <span style={{ color: "green" }}>مسجد خالد بن الوليد</span>
                        </div>
                    </div>

                    <div className="block lg:hidden" onClick={toggleHandler}>
                        <div id="btn-menu" className="button-menu-resp">
                            <div></div><div></div><div></div>
                        </div>
                    </div>
                </div>

                <div className={`menu-box-resp ${toggle ? 'show-menu' : ''} hidden lg:block lg:flex justify-center lg:items-center mr-auto lg:ml-2`}>
                    <div className="text-sm lg:flex-grow text-center">
                        {menuName.map((menu, index) => (
                            <NavLink
                                key={index}
                                to={menu.to}
                                style={{ paddingBottom: 20 }}
                                className="font-bold block mt-4 lg:inline-block lg:mt-0 text-black text-base lg:text-lg hover:text-black lg:mr-6"
                            >
                                {menu.name}
                            </NavLink>
                        ))}

                        {/* زر تسجيل الخروج داخل القائمة فقط في الهاتف */}
                        {user && (
                            <button
                                onClick={handleLogout}
                                title="تسجيل الخروج"
                                className="flex items-center justify-center gap-1 text-red font-bold border border-red px-3 py-1 rounded hover:bg-red-100 text-sm lg:hidden mt-4 mr-20"


>
                                <span>تسجيل الخروج</span>
                                <FiLogOut size={20} className="mt-1 logout" />
                            </button>
                        )}
                    </div>
                </div>

                {/* زر تسجيل الخروج خارج القائمة فقط في اللابتوب */}
                {user && (
                    <div className="hidden lg:flex items-center gap-2 justify-center mt-1 lg:mt-0">
                        <button
                            onClick={handleLogout}
                            title="تسجيل الخروج"
                            className="flex items-center gap-1 text-red font-bold border border-red px-3 py-1 rounded hover:bg-red-100 text-sm lg:text-base"
                        >
                            <span>تسجيل الخروج</span>
                            <FiLogOut size={20} className="mt-1 logout" />
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Header;