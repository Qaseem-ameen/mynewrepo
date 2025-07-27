// import Home from './pages/Home';
import Imam from './pages/Imam';
import AboutMosque from './pages/AboutMosque';
import PrayerTimes from './pages/PrayerTimes';
import FridayKhatib from './pages/FridayKhatib';
import WeeklyLessons from './pages/WeeklyLessons';

import LocationMap from './pages/LocationMap';
import Lessons from '../src/Components/Home/Agenda/Agenda';
import Paypage from './pages/Paypage';
import Login from './pages/Login'
// import { Suspense, lazy } from 'react';
// import Header from './Components/Layouts/Header';
// // import Footer from './Components/Layouts/Footer';
// import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation';

// const Home2 = lazy(() => import('./Components/Home'));
// const AgendaAfter = lazy(() => import('./Components/Agenda/AgendaAfter'));
// const AgendaBefore = lazy(() => import('./Components/Agenda/AgendaBefore'));

// function App() {
//   return (

//     <Router>
//       <Header/>
//         <Suspense  fallback={<LoadingAnimation/>}>
//           <Route exact path="/" component={Home2}/>
//           <Route exact path="/agenda" component={AgendaAfter}/>
//           <Route path="/agenda/agenda-sebelumnya" component={AgendaBefore}/>
//         </Suspense>
//       <Footer/>
//     </Router>
  
//     // <Router>
//     //   <Navbar />
//     //   <div className="container py-4">
//     //     <Routes>
//     //       <Route path="/" element={<Home />} />
//     //       <Route path="/imam" element={<Imam />} />
//     //       <Route path="/about" element={<AboutMosque />} />
//     //       <Route path="/prayers" element={<PrayerTimes />} />
//     //       <Route path="/khatib" element={<FridayKhatib />} />
//     //       <Route path="/lessons" element={<WeeklyLessons />} />
//     //       <Route path="/activities" element={<Activities />} />
//     //       <Route path="/location" element={<LocationMap />} />
//     //     </Routes>
//     //   </div>
//     //   <Footer />
//     // </Router>
//   );
// }

// export default App;
import React,{ Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import  './App.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation';
import Home from '../src/Components/Home/index'
import Azkar from '../src/Components/Home/Kegiatan/Kegiatan'
const Home2 = lazy(() => import('./Components/Home'));
const AgendaAfter = lazy(() => import('./Components/Agenda/AgendaAfter'));
const AgendaBefore = lazy(() => import('./Components/Agenda/AgendaBefore'));
import Activities from '../src/pages/Activities'
import Head from './Components/Home/Head/Head';
import { Navbar } from 'react-bootstrap';
import Signup from './pages/Signup';
import LessonList from './pages/LessonsList/LessonList'

function App() {
  return (
    <>
      <Router>
      
          <Suspense  fallback={<LoadingAnimation/>}>
            <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/agenda" component={AgendaAfter}/>
            <Route path="/agenda/agenda-sebelumnya" component={AgendaBefore}/>
            <Route path="/prayers" element={<PrayerTimes />} />
            <Route path="/activities" element={<Activities/>} />
            <Route path="/gh" element={<WeeklyLessons />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/azkar" element={<Azkar />} />
            <Route path="/Imam" element={<Imam />} />
            <Route path="/fridayKhatib" element={<FridayKhatib />} />
            <Route path="/about" element={<AboutMosque />} />
            <Route path="/paypage" element={<Paypage />} />
            <Route path="/lessonlist" element={<LessonList />} />
            
            </Routes>
          </Suspense>
      
      </Router>
    </>
  );
}

export default App;
