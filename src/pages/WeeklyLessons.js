import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
function WeeklyLessons() {
    const { t } = useTranslation();

    const [lessons] = useState([
        {
            title: "درس التفسير الأسبوعي",
            description: "شرح سورة الكهف من الآية 1 إلى 10.",
            image: "https://source.unsplash.com/featured/?quran",
            date: "2025-07-05",
            video: "https://www.youtube.com/embed/Nl8lRuCA3OE",
            audio: ""
        },
        {
            title: "درس في العقيدة",
            description: "التوحيد وأقسامه، مع فضيلة الشيخ عبد الرحمن.",
            image: "https://source.unsplash.com/featured/?mosque,lesson",
            date: "2025-07-06",
            video: "",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }
    ]);

    return (
        <div>
            <Header/>
        <div className="container">
            <h2 className="text-center mb-4">{t('weekly_lessons')}</h2>
            <div className="row">
                {lessons.map((lesson, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card shadow h-100">
                            <img src={lesson.image} className="card-img-top" alt={lesson.title} />
                            <div className="card-body">
                                <h5 className="card-title">{lesson.title}</h5>
                                <p className="card-text">{lesson.description}</p>
                                <p className="text-muted">{t('date')}: {lesson.date}</p>
                                {lesson.video && (
                                    <div className="ratio ratio-16x9 mb-2">
                                        <iframe
                                            src={lesson.video}
                                            title={lesson.title}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                                {lesson.audio && (
                                    <audio controls className="w-100 mt-2">
                                        <source src={lesson.audio} type="audio/mp3" />
                                        {t('audio_not_supported')}
                                    </audio>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
         <Footer/>
        </div>
    );
}

export default WeeklyLessons;
