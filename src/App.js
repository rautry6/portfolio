import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from "./components/MainPage";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import * as React from "react";
import {  ProjectPage } from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop'




export default function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" exact element={<MainPage/>} /> {/* 👈 Renders at /app/ */}
          <Route path="project" exact element={<ProjectPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

