import React, { useState, useEffect } from "react";

import { mockedCoursesList } from "../../constants.ts";
import CourseCard from "./components/CourseCard/CourseCard.tsx";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList.tsx";
import CourseLink from "../../common/Link/Link.tsx";

interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

const Courses: React.FC = () => {
  const localStorageData = JSON.parse(localStorage.getItem("courses") || "[]");

  const [list, setList] = useState<Course[]>([
    ...new Set<Course>([...mockedCoursesList, ...localStorageData]),
  ]);

  useEffect(() => {
    setList([...new Set<Course>([...mockedCoursesList, ...localStorageData])]);
  }, []);

  const hasCourses = mockedCoursesList.length !== 0;

  return (
    <div className="courses">
      {hasCourses && (
        <CourseLink linkPath="/courses/add" linkText="Add new course" />
      )}
      {!hasCourses && <EmptyCourseList />}
      {list.map((item) => (
        <CourseCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          creationDate={item.creationDate}
          duration={item.duration}
          authors={item.authors}
        />
      ))}
    </div>
  );
};

export default Courses;
