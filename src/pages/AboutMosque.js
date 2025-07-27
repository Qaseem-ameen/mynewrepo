import React from 'react';
import { useTranslation } from 'react-i18next';
import mosqueImage from '../Assets/masjid.jpg';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

function AboutMosque() {
    const { t } = useTranslation();

    return (
        <div>
        <Header/>
        <div
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{ minHeight: '90vh', marginTop: '' }}
        >
            <img
                src={mosqueImage}
                alt="Masjid"
                className=""
                style={{width:'1000px', maxHeight: '400px', objectFit: '',padding:'10px',borderRadius:'15px' }}
            />
            <div className="px-3" style={{ maxWidth: '1200px',marginTop:'10px' }}>
                <p className="lead">
                    مسجد خالد بن الوليد في حجيرة – ريف دمشق، أحد المساجد البارزة في المنطقة. تقام فيه الصلوات الخمس، وخطبة الجمعة، ويستضيف حلقات تحفيظ القرآن والدروس الشرعية، كما يُعتبر مركزًا لنشر الوعي الديني والأخلاقي في المجتمع.
                </p>
                <p style={{paddingTop:'10px',fontWeight:'bold'}}>
                   
                
                    تم تأسيس المسجد في عام 1990، ويشهد اليوم توسعة وخدمات متقدمة لخدمة المصلين من أبناء البلدة. 
                </p>
            </div>
        </div>
         <Footer/>
        </div>
    );
}

export default AboutMosque;