import React from 'react';
import { useTranslation } from 'react-i18next';
import mosqueImage from '../Assets/masjid.jpg';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="container text-center">
            <h1 className="mb-4">{t('welcome_to_mosque')}</h1>
            <img
                src={mosqueImage}
                alt="Masjid Khalid Ibn Al-Walid"
                className="img-fluid mb-4 rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <p className="lead">
                {t('mosque_description')}
            </p>
            <div className="mt-4">
                <h4>{t('latest_updates')}</h4>
                <ul className="list-unstyled">
                    <li>📌 {t('friday_prayer')} 12:30 م</li>
                    <li>🕋 {t('daily_lessons')} بعد صلاة المغرب</li>
                    <li>📖 {t('quran_circle')} يوم السبت بعد العشاء</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
