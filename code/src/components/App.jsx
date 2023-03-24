import React from "react";
import "./allStyles/styles.css";

import { Routes, Route } from "react-router-dom";
import Home from "./NavPages/Home";
import Service from "./NavPages/Service";
import Contact from "./NavPages/Contact";
import About from "./NavPages/About";
import Signup from "./NavPages/Signup";
import Signin from "./NavPages/Signin";


const App = () =>{
    return (
        <div className="App">
            <Routes>
                <Route path = '/' element={<Home />} />
                <Route path = '/service' element={<Service />} />
                <Route path = '/contact' element={<Contact />} />
                <Route path = '/about' element={<About />} />
                <Route path = '/signup' element={<Signup />} />
                <Route path = '/signin' element={<Signin />} />
            </Routes>
        </div>
    );
};

export default App;