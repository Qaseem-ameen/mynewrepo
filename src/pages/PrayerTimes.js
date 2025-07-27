import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PrayerTimes.css'; 
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';

function PrayerTimes() {
    const { t, i18n } = useTranslation();
    const [times, setTimes] = useState({});
    const [day, setDay] = useState({});
    const [hijridate, setHijridate] = useState({});
    const [gregodate, setGregodate] = useState({});
    const [date, setDate] = useState('');

    const backgroundColors = {
        'Fajr': '#dceeff',
        'Sunrise': '#ffe9cc',
        'Dhuhr': '#fff9cc',
        'Asr': '#e6f9e6',
        'Maghrib': '#ffe6e9',
        'Isha': '#f0e6ff',
       
    };

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const response = await axios.get(
                    "https://api.aladhan.com/v1/timingsByCity",
                    {
                        params: {
                            city: "Damascus",
                            country: "Syria",
                            method: 3,
                            school: 0,
                            language: initReactI18next
                        }
                    }
                );
                const data = response.data.data;
                setTimes(data.timings);
                setDate(data.date.readable);
                setDay(data.date.hijri.weekday.ar);
                setHijridate(data.date.hijri.date);
                setGregodate(data.date.gregorian.date);
            } catch (error) {
                console.error("Error fetching prayer times:", error);
            }
        };

        fetchPrayerTimes();
    }, [i18n.language]);

    return (
        <div>
            <Header/>
        <div className="container text-center my-5">
            {/* العنوان */}
            <h2 className="mb-3 fw-bold text-red" style={{  fontSize: "2.2rem",color: 'linear-gradient(to right,#EA5455, #FFEAEA)' }}>
                {t('prayer_times')}
            </h2>

            <p className="text-muted mb-4">{date}</p>

            {/* بطاقات أوقات الصلاة */}
            <div className="row justify-content-center">
                {Object.entries(times).map(([name, time], index) => {
                    const bgColor = backgroundColors[name] || "#e6f4ea";
                    return (
                        <div key={name} className="col-sm-6 col-md-4 mb-4 d-flex fade-in">
                            <div
                                className="card shadow w-100"
                                style={{
                                    background: bgColor,
                                    borderRadius: "15px",
                                    border: "1px solid #d1e7dd",
                                    transition: "transform 0.3s"
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title fw-bold" style={{ fontSize: "1.3rem", color: "#14532d" }}>
                                        {t(name.toUpperCase())}
                                    </h5>
                                    <p className="card-text" style={{ fontSize: "1.2rem" }}>{time}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default PrayerTimes;