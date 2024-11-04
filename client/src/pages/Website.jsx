import React from 'react'
import Companies from "../components/Companies/Companies.jsx";
import Residencies from "../components/Residencies/Residencies.jsx";
import Value from "../components/Value/Value.jsx";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Contact from "../components/Contact/contact.jsx";

const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
  </div>
  );
}

export default Website