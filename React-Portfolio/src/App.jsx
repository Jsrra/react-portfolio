import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element= {<About />}></Route>
        {/* <Route path="/Portfolio" element= {<Portfolio />}></Route> */}
        <Route path="/Contact" element= {<Contact />}></Route>
        <Route path="/Resume" element= {<Resume />}></Route>
      </Routes>
    
    <Footer />
    
    </div>
  );
}

export default App;
