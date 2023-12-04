import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.tsx";
import Courses from "./components/Courses/Courses.tsx";
import Registration from "./components/Registration/Registration.tsx";
import Login from "./components/Login/Login.tsx";
import CourseForm from "./components/CourseForm/CourseForm.tsx";
import CourseInfo from "./components/CourseInfo/CourseInfo.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/courses/:id" element={<CourseInfo />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/courses" element={<PrivateRoute />}>
            <Route path="add" element={<CourseForm />} />
            <Route path="update/:id" element={<CourseForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
