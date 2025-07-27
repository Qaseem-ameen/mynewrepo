import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
        document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/Imam">{t('Imam page')}</Link>
                <Link className="navbar-brand" to="/">{t('masjid_name')}</Link>
                <Link className="navbar-brand" to="/">{t('masjid_name')}</Link>
                <Link className="navbar-brand" to="/">{t('masjid_name')}</Link>
               
                <button className="btn btn-outline-light ms-auto" onClick={toggleLanguage}>
                    {i18n.language === 'ar' ? 'English' : 'العربية'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
