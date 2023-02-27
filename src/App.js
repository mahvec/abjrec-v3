import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/pages/About";
import Job from "./components/pages/Job";
import "./App.css";
import AppForm from "./components/pages/AppForm";
import AppSuccess from "./components/AppSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job" element={<Job />} />
          <Route path="/form/:title/:id" element={<AppForm />} />
          <Route path="/success" element={<AppSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
