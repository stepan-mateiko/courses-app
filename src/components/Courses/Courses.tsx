import React from "react";
import { useState } from "react";

import { mockedCoursesList } from "../../constants.ts";
import CourseCard from "./components/CourseCard/CourseCard.tsx";
import CourseInfo from "../CourseInfo/CourseInfo.tsx";
import Button from "../../common/Button/Button.tsx";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList.tsx";

const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleShowCourse = (courseProps) => {
    setSelectedCourse(courseProps);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };
  const renderContent = () => {
    if (selectedCourse) {
      return <CourseInfo {...selectedCourse} onBack={handleBackToCourses} />;
    } else {
      return (
        <>
          {mockedCoursesList.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              creationDate={item.creationDate}
              duration={item.duration}
              authors={item.authors}
              onShowCourse={handleShowCourse}
            />
          ))}
        </>
      );
    }
  };
  return (
    <div className="courses">
      {mockedCoursesList.length !== 0 && (
        <Button buttonText="Add new course" onClick={() => alert("Added!")} />
      )}
      {mockedCoursesList.length === 0 && <EmptyCourseList />}
      {renderContent()}
    </div>
  );
};

export default Courses;
