import React from 'react';
import Navbar from '../layouts/Navbar';
import Bio from "../components/Bio";
import Register from '../layouts/Register';
import Faq from '../layouts/Faq';
import Footer from '../layouts/Footer';


const About=()=>{
    return(
        <>
        <Navbar/>
        <Bio/>
        <Register/>
        <Faq/>
        <Footer/>
        </>
    );
};

export default About;