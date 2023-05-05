// import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/header"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/resume"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element= {<About />}></Route>
        <Route path="/portfolio" element= {<Portfolio />}></Route>
        <Route path="/contact" element= {<Contact />}></Route>
        <Route path="/resume" element= {<Resume />}></Route>
      </Routes>
    
    <Footer />
    
    </div>
  );
}

export default App;
