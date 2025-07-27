import React from 'react';
import Head from './Head/Head';
import Content1 from './Content1/Content1';
import Kegiatan from './Kegiatan/Kegiatan';
import Agenda from './Agenda/Agenda';

import Pengurus from './Pengurus/Pengurus';
import Donasi from './Donasi/Donasi';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

function Home() {
    return (
        <>
        <Header/>
            <Head/>
            <Content1/>
            <Kegiatan/>
            <Agenda/>
            {/* <Pengurus/> */}
            <Donasi/>
            <Footer/>
        </>
    )
}

export default Home;
