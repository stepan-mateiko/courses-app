import React from "react";
import { useDispatch } from "react-redux";

import { getDuration } from "../../../../helpers/getCourseDuration.ts";
import { getAuthor } from "../../../../helpers/getAuthors.ts";
import CourseLink from "../../../../common/Link/Link.tsx";
import Button from "../../../../common/Button/Button.tsx";
import { Trash, Update } from "../../../Icon/Icon.tsx";
import { CoursesActionTypes } from "../../../../store/courses/types.ts";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
}) => {
  const dispatch = useDispatch();
  const courseDate: string = creationDate.split("/").join(".");
  const courseDuration: string = getDuration(duration);
  const courseAuthors = authors.map((item) => getAuthor(item)).join("   ");
  const deleteCourse = () => {
    dispatch({
      type: CoursesActionTypes.DELETE_COURSE,
      payload: id,
    });
  };

  return (
    <div className="card">
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-info">
        <p>
          <strong>Authors:</strong> {courseAuthors}
        </p>
        <p>
          <strong>Duration:</strong> {courseDuration}
        </p>
        <p>
          <strong>Created:</strong> {courseDate}
        </p>
        <div className="card__btns">
          <CourseLink linkPath={`/courses/${id}`} linkText="show course" />
          <Button buttonText="" onClick={deleteCourse} element={<Trash />} />
          <Button
            buttonText=""
            onClick={() => alert("Updated")}
            element={<Update />}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
