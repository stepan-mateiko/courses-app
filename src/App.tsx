import React from "react";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import Courses from "./components/Courses/Courses.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Courses />
    </div>
  );
};

export default App;
