import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./component/DashBoard";
import Loginpage from "./component/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
