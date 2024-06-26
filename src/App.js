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
import Challenges from "./components/Challenges/Challenges";
import Challenge from "./components/Challenges/Individual Challenges/Challenge";
import TeaCozy from "./components/TeaCozy/TeaCozy";
import "./resources/fonts/Quicksand/static/Quicksand-Bold.ttf";
import "./resources/fonts/Quicksand/static/Quicksand-Light.ttf";
import "./resources/fonts/Quicksand/static/Quicksand-Medium.ttf";
import "./resources/fonts/Quicksand/static/Quicksand-Regular.ttf";
import "./resources/fonts/Quicksand/static/Quicksand-SemiBold.ttf";
import "./App.css";
import ProjectsChallenges from "./components/ProjectsChallenges/ProjectsChallenges";
import Project from "./components/Projects/Individual Projects/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="aboutMe" element={<AboutMe/>}/>
          <Route path="projectsChallenges" element={<ProjectsChallenges />}/>
          <Route path="projects" element={<Projects/>}>
            <Route path="/projects/:projectName" element={<Project />} />
          </Route>
          <Route path="challenges" element={<Challenges/>}/>
          <Route path="challenges/:challengeId" element={<Challenge/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="teacozy" element={<TeaCozy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
