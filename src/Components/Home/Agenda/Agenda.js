import React from 'react';
import CallenderIcon from '../../../Assets/image/icon/callender-icon.svg';
import ImageCon from '../../../Assets/image/contoh.jpg';
import Aked from '../../../Assets/akeda.png';
import fekh from '../../../Assets/ALFiqh.png';
import seraa from '../../../Assets/seraa.jpg';
import tfseer from '../../../Assets/tfseer.webp';
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';

function Agenda() {
    return (
        <div>
       
        <div className="container mx-auto px-4 lg:px-2 content-persec">
            <h2 className="text-xl md:text-2xl text-black font-bold">الدروس الأسبوعية</h2>

            <div className="flex flex-wrap items-start mt-4">

                <div className="flex w-full md:w-2/4 p-0 md:p-2 lg:p-4">
                    <div className="h-agenda-img w-32  sm:w-40 flex-none bg-cover text-center overflow-hidden  agenda-image"
                        title="Kebersihan sebagian dari iman">
                        <img className="opacity-80 h-70" src={Aked} alt=""/>
                    </div>
                    <div className="bg-white px-2 lg:px-4 flex flex-col justify-between leading-normal">
                        <div className="mb-4 lg:mb-8">
                            <div className="text-red font-bold text-base sm:text-xl md:text-lg lg:text-xl mb-0 md:mb-2">
                               درس في العقيدة (كتاب الأصول الثلاثة)</div>
                            <p className="text-black text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                            تتناول دروس "الأصول الثلاثة" لمحمد بن عبد الوهاب ثلاثة مسائل أساسية: معرفة الله تعالى، ومعرفة دين الإسلام، ومعرفة النبي محمد صلى الله عليه وسلم. هذه المسائل هي الأسئلة التي يسألها الملكان في القبر، وهي أساس الدين وأمور يجب على كل مسلم معرفتها.
                            </p>
                            <div className="flex mt-1 sm:mt-2">
                                <img src={CallenderIcon} alt=""/>
                                <span className="text-xs sm:text-base md:text-sm lg:text-base text-black ml-2 font-bold">يوم السبت عقب صلاة الفجر</span>
                            </div>
                            {/* <button
                                className="px-2 sm:px-4 py-1 bg-transparent text-red rounded-md border-solid border border-red text-xs md:text-sm mt-2 lg:mt-4">Baca
                                Lebih Lanjut
                            </button> */}
                        </div>
                    </div>
                </div>


                <div className="flex w-full md:w-2/4 p-0 md:p-2 lg:p-4">
                    <div className="h-agenda-img w-32 sm:w-40 flex-none bg-cover text-center overflow-hidden  agenda-image"
                        title="Kebersihan sebagian dari iman">
                        <img className="opacity-80  h-70" src={fekh} alt=""/>
                    </div>
                    <div className="bg-white px-2 lg:px-4 flex flex-col justify-between leading-normal">
                        <div className="mb-4 lg:mb-8">
                            <div className="text-red font-bold text-base sm:text-xl md:text-lg lg:text-xl mb-0 md:mb-2">
                               درس في الفقه</div>
                            <p className="text-black text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                            تتناول الأحكام الشرعية العملية المتعلقة بأفعال المكلفين، أي الأحكام التي تتعلق بما يفعله المسلم من عبادات ومعاملات. تشمل هذه الأحكام جوانب مختلفة من حياة المسلم، من العبادات كالصلاة والصوم والحج والزكاة، إلى المعاملات المالية والاجتماعية والزواج والطلاق وغيرها. وتهدف هذه الدروس إلى بيان كيفية تطبيق هذه الأحكام في الواقع العملي وتحديد موقف الشرع منها.
                            </p>
                            <div className="flex mt-1 sm:mt-2">
                                <img src={CallenderIcon} alt=""/>
                                <span className="text-xs sm:text-base md:text-sm lg:text-base text-black ml-2 font-bold">يوم الإثنين عقب صلاة العشاء</span>
                            </div>
                            {/* <button
                                className="px-2 sm:px-4 py-1 bg-transparent text-red rounded-md border-solid border border-red text-xs md:text-sm mt-2 lg:mt-4">Baca
                                Lebih Lanjut
                            </button> */}
                        </div>
                    </div>
                </div>


                <div className="flex w-full md:w-2/4 p-0 md:p-2 lg:p-4">
                    <div className="h-agenda-img w-32 sm:w-40 flex-none bg-cover text-center overflow-hidden  agenda-image"
                        title="Kebersihan sebagian dari iman">
                        <img style={{backgroundColor:'',borderRadius:'100px'}} className="opacity-80 h-70" src={seraa} alt=""/>
                    </div>
                    <div className="bg-white px-2 lg:px-4 flex flex-col justify-between leading-normal">
                        <div className="mb-4 lg:mb-8">
                            <div className="text-red font-bold text-base sm:text-xl md:text-lg lg:text-xl mb-0 md:mb-2">
                               درس في السيرة النبوية (كتاب الرحيق المختوم)</div>
                            <p className="text-black text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                            تتناول حياة النبي محمد صلى الله عليه وسلم، بدءًا من أحوال العرب قبل الإسلام مرورًا بنسبه وولادته ونشأته، ثم تسلط الضوء على مراحل الدعوة الإسلامية، بدءًا من الدعوة السرية والجهرية، والصعوبات التي واجهها المسلمون، والهجرة إلى الحبشة، ثم الهجرة إلى المدينة المنورة، وبناء الدولة الإسلامية، وتأسيس المسجد النبوي، والمؤاخاة بين المسلمين، ووضع ميثاق التحالف الإسلامي، ثم تتطرق إلى الغزوات والسرايا التي خاضها المسلمون،  </p>
                            <div className="flex mt-1 sm:mt-2">
                                <img src={CallenderIcon} alt=""/>
                                <span className="text-xs sm:text-base md:text-sm lg:text-base text-black ml-2 font-bold">يوم الأربعاء عقب صلاة العشاء</span>
                            </div>
                            {/* <button
                                className="px-2 sm:px-4 py-1 bg-transparent text-red rounded-md border-solid border border-red text-xs md:text-sm mt-2 lg:mt-4">Baca
                                Lebih Lanjut
                            </button> */}
                        </div>
                    </div>
                </div>


                <div className="flex w-full md:w-2/4 p-0 md:p-2 lg:p-4">
                    <div className="h-agenda-img w-32 sm:w-40 flex-none bg-cover text-center overflow-hidden  agenda-image"
                        title="Kebersihan sebagian dari iman">
                        <img style={{backgroundColor:'red',borderRadius:'100px'}} className="opacity-80 h-60 " src={tfseer} alt=""/>
                    </div>
                    <div className="bg-white px-2 lg:px-4 flex flex-col justify-between leading-normal">
                        <div className="mb-4 lg:mb-8">
                            <div className="text-red font-bold text-base sm:text-xl md:text-lg lg:text-xl mb-0 md:mb-2">
                                درس في التفسير</div>
                            <p className="text-black text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                            تتناول شرح معاني آيات القرآن الكريم، وبيان مقاصدها، واستخراج الأحكام الشرعية والفوائد منها، وذلك من خلال دراسة علوم القرآن المختلفة. تشمل هذه الدروس تحليل الألفاظ القرآنية، وبيان أسباب النزول، وفهم السياقات التاريخية والاجتماعية للآيات، والربط بينها وبين السنة النبوية وأقوال الصحابة والتابعين. الهدف هو توضيح مراد الله تعالى من خلال كتابه الكريم وتقديم فهم أعمق للإسلام وتعاليمه.
                            </p>
                            <div className="flex mt-1 sm:mt-2">
                                <img src={CallenderIcon} alt=""/>
                                <span className="text-xs sm:text-base md:text-sm lg:text-base text-black ml-2 font-bold">يوم الخميس عقب صلاة العشاء</span>
                            </div>
                            {/* <button
                                className="px-2 sm:px-4 py-1 bg-transparent text-red rounded-md border-solid border border-red text-xs md:text-sm mt-2 lg:mt-4">Baca
                                Lebih Lanjut
                            </button> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
        </div>
    )
}

export default Agenda;
