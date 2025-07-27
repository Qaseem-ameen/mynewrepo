import React from 'react';
import Slider from '../../Slider/Slider';
import SliderItem from '../../Slider/SliderItem';
import ImageCon from '../../../Assets/image/contoh.jpg';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';


function Kegiatan() {

    const sliderConfiguration=  { type: 'slider', bound: true, rewind: true, startAt: 0, perView: 4, gap: 22, autoplay: 4000,
    animationDuration: 1000, hoverpause: true, touchRatio: 1, direction: 'rtl',  breakpoints: { 1024: { perView: 2, gap: 16 }, 640: { perView: 1, gap: 12 }} };

    return (
        <>
       
            <div className="container mx-auto px-4 lg:px-2 content-persec">
                <h2 className="text-xl md:text-2xl text-black font-bold">الأذكار اليومية</h2>
            </div>
            <div className="mt-4 px-4">
                <Slider nameClass="glide-kegiatan" sliderConfiguration={sliderConfiguration}>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">لا إله إلا الله وحده ال شريك له له الملك وله الحمد وهو على كل شيء قدير</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">سبحان الله وبحمده، سبحان الله العظيم</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">اللهم صل وسلم على نبينا محمد</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">أستغفر الله العظيم وأتوب إليه</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">لا حول ولا قوة إلا بالله</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">اللهم اجعلني من التوابين واجعلني من المتطهرين</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                    <SliderItem image={ImageCon} addClasses={['relative','overflow-hidden',]}>
                        <label className="absolute label-kegiatan p-2 sm:p-4 text-white text-sm md:text-base lg:text-lg  leading-normal label-kegiatan">أدعية وأذكار</label>
                        <div className="absolute title-kegiatan p-2 sm:p-4">
                            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold leading-snug">اللهم إنك عفو كريم تحب العفو فاعف عني</h1>
                            <p className="text-white text-xs sm:text-sm md:text-base mt-4"></p>
                        </div>
                    </SliderItem>
                </Slider>
            
            </div>
            
        </>
    )
}

export default Kegiatan;
