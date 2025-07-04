import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";



function App() {
  return (
    <>
      <Navbar />
      <Home />
     <Education/>

     <Skills/>
   
     <Achievements/>
     <Projects/>
     
      <Footer/>
    </>
  );
}

export default App;
