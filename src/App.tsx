import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import * as Home from "./pages/Home";
import * as Skills from "./pages/Skills";
import * as Projects from "./pages/Projects";
import * as Others from "./pages/Others";

import NavBar from "./components/NavBar/NavBar";

const theme = createTheme({
  palette: {
    text: {
      primary: "rgba(248, 249, 249, 1)",
      secondary: "rgba(23, 32, 42, 1)",
    },
  },
  typography: {
    fontFamily: "League Spartan",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Others.Root />} />
          <Route path="home">
            <Route path="about" element={<Home.About />} />
            <Route path="contact" element={<Home.Contact />} />
          </Route>
          <Route path="skills">
            <Route path="cookery" element={<Skills.Cookery />} />
            <Route path="photography" element={<Skills.Photography />} />
            <Route path="engineering" element={<Skills.Engineering />} />
          </Route>
          <Route path="projects">
            <Route path="personal" element={<Projects.Personal />} />
            <Route path="workspace" element={<Projects.Workspace />} />
          </Route>
          <Route path="*" element={<Others.NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
