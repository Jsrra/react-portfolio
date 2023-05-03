import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import "./App.css";

import Footer from "./components/footer";
import Header from "./components/Header"
import About from "./components/About"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element= {<About />}></Route>
        {/* <Route path="/Portfolio" element= {<Portfolio />}></Route> */}
        <Route path="/" element= {<About />}></Route>
      </Routes>
    
    <Footer />
    
    </div>
  );
}

export default App;
