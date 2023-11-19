import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.tsx";
import Courses from "./components/Courses/Courses.tsx";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
