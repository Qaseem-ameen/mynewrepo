import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageContoh from '../../../Assets/masjid3.png';

function Head() {
    return (
        <div className="container mx-auto px-4 lg:px-2">
            <div className="flex flex-col md:flex-row mt-8 items-center justify-between">

                 {/* النص */}
                 <div  className="flex-1 mt- md:mt- text- md:text-right md:pr-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold tracking-wide">
                        أَحَبُّ البِلَادِ إلى اللهِ مَسَاجِدُهَا.
                        <span className="text-lg sm:text-xl text-red block mt-1">– رواه مسلم</span>
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-black leading-normal md:leading-relaxed tracking-wide mt-2">
                        أَخْبَرَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّ أَحَبَّ الْأَمَاكِنِ إِلَى اللَّهِ عَزَّ وَجَلَّ مَسَاجِدُهَا؛ لِأَنَّهَا بُيُوتُ الطَّاعَاتِ، وَأَسَاسُهَا عَلَى التَّقْوَى.
                    </p>
                    <button 
                        style={{ backgroundImage: 'linear-gradient(to left, #00b09b, #6cd35f)' }}
                        className="px-12 py-2 rounded-md font-bold text-lg text-white mt-3"
                    >
                        <NavLink to="/activities">جدول الأعمال</NavLink>

                        
                    </button>
                </div>
                {/* الصورة */}
                <div className="flex-1 mt-6  md:mt-6 md:pl-1 text-center md:text-left">
                    <div className="bg-white  rounded-2xl  inline-block">
                        <img
                        style={{width:'700px',height:'400px',borderRadius:'20px'}}
                            src={ImageContoh}
                            alt="صورة توضيحية"
                            className="rounded-2xl w-full  object-cover"
                        />
                    </div>
                    
                </div>

              
            </div>
           

        </div>
    );
}

export default Head;