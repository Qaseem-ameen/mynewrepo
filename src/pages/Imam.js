import React from 'react';
import { useTranslation } from 'react-i18next';
import imampic from '.././Assets/Imampic.png'
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
function Imam() {
    const { t } = useTranslation();

    return (
        <div>
            <Header/>
        <div className="container my-5">
            <h2 className="text-center mb-4 text-red  fw-bold"style={{ color: 'linear-gradient(to right,#EA5455, #FFEAEA)', fontSize: "1.5rem" }}><span style={{ color: 'linear-gradient(to right,#EA5455, #FFEAEA)'}}>{t('imam_of_the_mosque')}</span></h2>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center shadow rounded p-4" style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
                
                {/* صورة الإمام */}
                <div className="mb-4 mb-md-0 ms-md-4 text-center">
                    <img
                        src={imampic}
                        alt="Imam"
                        className="rounded-circle"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                </div>

                {/* معلومات الإمام */}
                <div className="text-md-end text-center" dir="rtl">
                    <h4 className="fw-bold">الشيخ عَامِر شَنوَان أبُو إسحَاق</h4>
                    <p>
                        إمام وخطيب مسجد خالد بن الوليد، حاصل على إجازة في الشريعة الإسلامية من جامعة دمشق، وله خبرة تزيد عن 4 سنوات في الإمامة والخطابة والتدريس.
                    </p>
                    <p className="text-muted">{t('contact')}: imam@example.com</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Imam;