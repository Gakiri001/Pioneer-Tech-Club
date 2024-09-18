import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/global.css";
import TechNews from "./Pages/TechNews";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<TechNews/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
