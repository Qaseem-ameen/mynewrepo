import React, { useContext,useState }  from 'react';
import axios from 'axios';
import { NavLink,Link } from 'react-router-dom';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import './index.css'


export const Paypage = () => {

  
    return (
    
     <div>
    <Header/>
         
           <div className="container">
          <div className='row justify-content-center '>
          <h1 className='text-center titlee'>تبرع </h1>
          <p className="ppay text-center">ارخِ يدك بالصدقة تُرخى حبال المصائب من على عاتقك واعلم أن حاجتك إلى أجر الصدقة أشد حاجة ممن تتصدق عليه. لا تتهاونون فى الصدقة،الصدقة تقي مصارع السوء،وتكفر الذنوب.</p>
          <p className="ppay2 text-center ">للتبرع عبر شام كاش:<span className="id">(4859 7896 2413 1654)</span></p>
         
          </div>
         </div>
         <Footer/>
         </div>
        )
        }
        export default Paypage;

