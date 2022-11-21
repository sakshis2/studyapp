import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./component/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Loginpage />} /> */}
        {/* <Route path="/" element={<DashBoard />} /> */}
        {/* <Route path="/dashboard" element={<DashBoard />} /> */}

        <Route path="/" element={<Loginpage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
