import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="aboutMe" element={<AboutMe/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
