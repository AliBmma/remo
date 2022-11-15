import React from 'react'
import Hero from '../../Component/Inc/Hero';
import Navbar from '../../Component/Navbar/navbar';
import AboutImg from "../image/5.jpg"
import Footer from '../Rc/Footer';
import Trip from '../Rc/Card';



function Speakers (){
  return (
    <>
     <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={AboutImg}
    title="Speakers"
    btnClass="hide"
    
    />
    <Trip/>
   <Footer/>
    </>
  )
}




export default Speakers;