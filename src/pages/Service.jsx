import React from 'react';

import Navbar from '../layouts/Navbar';
import Serve from '../components/serve';
import Register from '../layouts/Register';
import Faq from '../layouts/Faq';
import Footer from '../layouts/Footer';


const Service=()=>{
    return(
        <>
        <Navbar/>
        <Serve/>
        <Register/>
        <Faq/>
        <Footer/>
        
        
        </>
    )
};
export default Service;