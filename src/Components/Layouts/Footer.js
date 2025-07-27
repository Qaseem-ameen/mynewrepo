import React from 'react';
import { Link } from "react-router-dom";

import facebookIcon from '../../Assets/image/icon/icon-sosmed/facebook-icon.svg';
import twitterIcon from '../../Assets/image/icon/icon-sosmed/twitter-icon.svg';
import youtubeIcon from '../../Assets/image/icon/icon-sosmed/youtube-icon.svg';
import instagramIcon from '../../Assets/image/icon/icon-sosmed/instagram-icon.svg';


function Footer() {

    return (
        <div className="container mx-auto px-4 lg:px-2 content-persec-2">
            <div style={{backgroundImage:'linear-gradient(to left, #00b09b, #6cd35f)'}} className="box-footer bg-red- absolute left-0"></div>
            <div className="resp-footer block flex flex-wrap ml-auto">
                <ul className="ml-970-0">
                    <li className="font-bold text-lg text-red"><a href="/home">الصفحة الرئيسية</a></li>
                    <li className="mt-3"><Link to="/prayers" className="text-base text-black">مواقيت الصلاة</Link></li>
                    <li className="mt-2"><Link to="/lessons" className="text-base text-black">الدروس الأسبوعية</Link></li>
                    <li className="mt-2"><Link to="/azkar" className="text-base text-black">الأذكار</Link></li>
                    <li className="mt-2"><Link to="/paypage" className="text-base text-black">تبرع</Link></li>
                </ul>
                <ul className="mt-10 sm:mt-0">
                    <li className="font-bold text-lg text-red">تواصل</li>
                    <li className="mt-3"><i className="bi bi-telephone-fill " style={{transition:'0.3',padding:'0 2px'}}></i><Link to="#" className="text-base text-black">963953621342+</Link></li>
                    <li className="mt-2"><i className="bi bi-envelope-fill " style={{transition:'0.3',padding:'0 2px'}}></i><Link to="#" className="text-base text-black">masjidkhalid@gmail.com</Link></li>
                    <li className="mt-2"><i className="bi bi-house-fill " style={{transition:'0.3',padding:'0 2px'}}></i><Link to="#" className="text-base text-black ">ريف دمشق/ حجيرة/مسجد خالد بن الوليد</Link></li>
                </ul>
                {/* <ul className="mt-10 sm:mt-0">
                    <li className="font-bold text-lg text-red">Lain-lain</li>
                    <li className="mt-3"><Link to="/" className="text-base text-black">Tanggal Hijriyah</Link></li>
                    <li className="mt-2"><Link to="/" className="text-base text-black">Jadwal Sholat</Link></li>
                </ul> */}
                <ul className="mt-10 sm:mt-0 pr-20">
                    <li className="font-bold text-lg text-red">وسائل التواصل الاجتماعي</li>
                    <li className="mt-3">
                        <ul className="flex">
                            <li><Link to="https://www.facebook.com/profile.php?id=61577255060523&mibextid=ZbWKwL"><img src={facebookIcon} alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src={twitterIcon} alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src={youtubeIcon} alt=""/></Link></li>
                            <li className="ml-4"><Link to="/"><img src={instagramIcon} alt=""/></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-center text-sm md:text-base mt-24 mb-5">جميع الحقوق محفوظة-مسجد خالد بن الوليد © 2025 </div>
        </div>
    )
}

export default Footer;
