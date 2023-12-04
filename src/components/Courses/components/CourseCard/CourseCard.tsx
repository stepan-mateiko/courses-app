import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDuration } from "../../../../helpers/getCourseDuration.ts";
import CourseLink from "../../../../common/Link/Link.tsx";
import Button from "../../../../common/Button/Button.tsx";
import { Trash, Update } from "../../../Icon/Icon.tsx";
import { RootState } from "../../../../store/index.ts";
import { deleteCourse } from "../../../../store/courses/thunk.ts";

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
  const user = useSelector((state: RootState) => state.user);
  const allAuthors = useSelector((state: RootState) => state.authors);
  const courseDate: string = creationDate
    ? creationDate.split("/").join(".")
    : "";
  const courseDuration: string = getDuration(duration);
  const courseAuthors = authors
    .map((id) => {
      return allAuthors.find((obj) => obj.id === id)?.name;
    })
    .join(" ");

  const handleDeleteCourse = () => {
    dispatch(deleteCourse(user.token, id));
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
          {user.role === "admin" && (
            <Button
              buttonText=""
              onClick={handleDeleteCourse}
              element={<Trash />}
            />
          )}
          {user.role === "admin" && (
            <CourseLink
              linkPath={`/courses/update/${id}`}
              linkText=""
              element={<Update />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
