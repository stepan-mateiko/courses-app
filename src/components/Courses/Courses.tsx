import React from "react";
import { useSelector } from "react-redux";

import CourseCard from "./components/CourseCard/CourseCard.tsx";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList.tsx";
import CourseLink from "../../common/Link/Link.tsx";
import { CourseType } from "../../store/courses/types.ts";

interface RootState {
  courses: CourseType[];
}

const Courses: React.FC = () => {
  const courses = useSelector((state: RootState) => state.courses);

  const hasCourses = courses.length !== 0;

  return (
    <div className="courses">
      {hasCourses && (
        <CourseLink linkPath="/courses/add" linkText="Add new course" />
      )}
      {!hasCourses && <EmptyCourseList />}
      {courses.map((item: CourseType) => (
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
