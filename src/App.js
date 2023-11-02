import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AppLayout from "./app/AppLayout";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import TeaCozy from "./resources/project-links/Tea Cozy/TeaCozy";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="aboutMe" element={<AboutMe/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="teacozy" element={<TeaCozy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
