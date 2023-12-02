import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getDuration } from "../../helpers/getCourseDuration.ts";
import { getAuthor } from "../../helpers/getAuthors.ts";
import CourseLink from "../../common/Link/Link.tsx";
import { CourseType } from "../../store/courses/types.ts";

// Define RootState type
interface RootState {
  courses: CourseType[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

const CourseInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const list = useSelector((state: RootState) => state.courses);

  const course: Course | undefined = list.find((item) => item.id === id);
  if (!course) {
    return <p>Course not found</p>;
  }

  const { title, description, creationDate, duration, authors } = course;
  const courseDate: string = creationDate.split("/").join(".");
  const courseDuration: string = getDuration(duration);
  const courseAuthors = authors.map((item) => getAuthor(item)).join("   ");

  return (
    <div className="course-info">
      <h3>{title}</h3>
      <div className="course-info__wrapper">
        <div className="course-info__description">
          <h4>Description</h4>
          <p>{description}</p>
        </div>
        <div className="course-info__data">
          <p>
            <strong>Id:</strong> {id}
          </p>
          <p>
            <strong>Duration:</strong> {courseDuration}
          </p>
          <p>
            <strong>Created:</strong> {courseDate}
          </p>
          <p>
            <strong>Authors:</strong> {courseAuthors}
          </p>
        </div>
      </div>
      <CourseLink linkPath="/courses" linkText="back" />
    </div>
  );
};

export default CourseInfo;
