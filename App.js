import Home from './Component/pages/Home/Home';
import About from './Component/pages/About';
import Speakers from './Component/pages/Speakers';
import Contact from './Component/Contact';
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Login from "./Component/pages/login/Login";
import Register from "./Component/pages/register/Register";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Component/context/Context";
import Particles from './Component/Particles'
//import Particles from 'react-tsparticles';
import {Switch} from "react-router-dom"
import Navbar from './Component/Navbar/navbar';




function App() {
  const { user } = useContext(Context);
return (
  
    <div className="App">
       <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Speakers" element={<Speakers />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/register"element={  <Register />} />
      <Route path="/login"element={  <Login />} />
     </Routes> <Particles id="tsparticles" />

    </div>
    
    
  ); 
}
export default App;




