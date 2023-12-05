import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CourseCard from "./components/CourseCard/CourseCard.tsx";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList.tsx";
import CourseLink from "../../common/Link/Link.tsx";
import Button from "../../common/Button/Button.tsx";
import { CourseType } from "../../store/courses/types.ts";
import { getCourses } from "../../store/courses/thunk.ts";
import { getUserInfo } from "../../store/user/thunk.ts";
import { RootState } from "../../store/index.ts";
import { getAuthors } from "../../store/authors/thunk.ts";

const Courses: React.FC = () => {
  const courses = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch();
  const hasCourses = courses.length !== 0;
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const isAuth = localStorage.getItem("token");
    if (isAuth) {
      dispatch(getUserInfo(isAuth) as any);
    }
    dispatch(getCourses() as any);

    dispatch(getAuthors() as any);
  }, [dispatch]);

  return (
    <div className="courses">
      {hasCourses && user.role === "admin" && (
        <CourseLink linkPath="/courses/add" linkText="add new course" />
      )}{" "}
      {hasCourses && user.role !== "admin" && (
        <Button
          buttonText="add new course"
          onClick={() =>
            alert(
              "You don't have permissions to create a course. Please log in as ADMIN"
            )
          }
        />
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
