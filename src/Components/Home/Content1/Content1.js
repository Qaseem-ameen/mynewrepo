import React from 'react';

// iMAGE
import Imagecontent1 from '../../../Assets/image/content1-1.svg';
import Imagecontent2 from '../../../Assets/image/content1-2.svg';
import Imagecontent3 from '../../../Assets/image/content1-3.svg';


function Content1() {
    return (
        <div className="container mx-auto px-4 lg:px-2 content-persec">
            <div className="">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold leading-normal tracking-wide max-w-5xl">
                    “مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِه” <span className="text-red text-base md:text-xl">(رواه مسلم. 1893)</span></h1>
                <div className="block md:flex mt-10 items-start">

                    <div
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 md:mr-4 h-content-1">
                        <img style={{backgroundImage:'linear-gradient(to left, #00b09b, #6cd35f)',borderRadius:'20px',}} className="w-full image-content-1" src={Imagecontent1} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                            لضمان قدسية ونظافة ونظام المسجد
                            </p>
                        </div>
                    </div>

                    <div
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 md:mr-4 h-content-1">
                        <img style={{backgroundImage:'linear-gradient(to left, #00b09b, #6cd35f)',borderRadius:'20px',}} className="w-full image-content-1" src={Imagecontent2} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                        تنظيم أنشطة مختلفة لتنمية المسجد وزيادة التوعية الدينية.
                            </p>
                        </div>
                    </div>

                    <div style={{marginRight:'15px'}}
                        className="content-1-mt flex flex-col justify-center items-center lg:items-start overflow-hidden border-solid border border-red-transparent rounded-md flex-1 p-5 md:p-6 lg:p-10 h-content-1">
                        <img style={{backgroundImage:'linear-gradient(to left, #00b09b, #6cd35f)',borderRadius:'20px',}} className="w-full image-content-1" src={Imagecontent3} alt="Sunset in the mountains"/>
                        <div className="mt-6 text-center lg:text-left">
                            <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                            تشكيل وحدات عمل تعنى بالمالية والأعمال لجمع التبرعات لتمويل إدارة المساجد ورعاية المجتمع.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content1;
