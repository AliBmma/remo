import React from 'react'
import Navbar from '../../Component/Navbar/navbar';
import Hero from '../../Component/Inc/Hero';
import AboutImg from "../image/2.jpg"
import Footer from '../Rc/Footer';
import AboutUs from '../Tps/AboutUs';



function About (){
  return (
    <>
     <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={AboutImg}
    title="About"
    btnClass="hide"
    />

    <AboutUs />
    <Footer/>
    </>
  
  );
}

export default About;
