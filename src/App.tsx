import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Home from "./pages/Home";
import * as Skills from "./pages/Skills";
import * as Projects from "./pages/Projects";

import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar/NavBar";
import CarouselSlider from "./components/CarouselSlider/CarouselSlider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CarouselSlider />
        <Routes>
          <Route path="home">
            <Route path="about" element={<Home.About />} />
            <Route path="contact" element={<Home.Contact />} />
          </Route>
          <Route path="skills">
            <Route path="cookery" element={<Skills.Cookery />} />
            <Route path="photography" element={<Skills.Photography />} />
            <Route path="programming" element={<Skills.Programming />} />
          </Route>
          <Route path="projects">
            <Route path="personal" element={<Projects.Personal />} />
            <Route path="workspace" element={<Projects.Workspace />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
