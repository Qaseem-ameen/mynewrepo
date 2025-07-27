import React from 'react';
import {NavLink} from 'react-router-dom'
function Donasi() {
    return (
        <div className="container mx-auto px-4 lg:px-2 text-center content-persec-2">
            <h1
                className="text-xl md:text-2xl lg:text-3xl text-black font-bold leading-normal tracking-wide max-w-screen-xl m-auto">
                “إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو دعوة ولد صالح” <span className="text-red text-base lg:text-xl">(صحيح مسلم رقم 1631)</span></h1>
            <div className="mt-4">
                <p className="text-base text-black">إجمالي التبرعات المجمعة</p>
                <h4 className="text-3xl font-extrabold text-black mt-2"> 342,000 .SP</h4>
            </div>
            <button className="px-12 py-2 font-bold rounded-md bg-red-gradient text-lg text-white mt-5" style={{ backgroundImage: 'linear-gradient(to left, #00b09b, #6cd35f)' }}><NavLink to="/paypage">تبرع</NavLink></button>
        </div>
    )
}

export default Donasi;
