import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from "./components/MainPage";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import * as React from "react";
import {  ProjectPage } from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop'
import Tracker from './components/Citizen Tracker/Tracker.tsx';


export default function App() {



  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="portfolio/"  element={<MainPage/>} /> {/* 👈 Renders at /app/ */}
          <Route path="portfolio/project/"  element={<ProjectPage/>}/>
          <Route path = "portfolio/CitizenTracker" element= {<Tracker/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

