import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import AboutUsPage from "./page/AboutUsPage";
import EXPANSION_PROJECTS from "./page/ExpansionProjects";
import ContactPage from "./page/ContactPage";
import MyTeamPge from "./page/MyTeamPge";

function App() {


    return (
        <Router>
            <Navbar/>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/expansion" element={<EXPANSION_PROJECTS />} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/myteam" element={<MyTeamPge/>} />
                </Routes>
            </div>

            <Footer/>
        </Router>
    );
}

export default App;
