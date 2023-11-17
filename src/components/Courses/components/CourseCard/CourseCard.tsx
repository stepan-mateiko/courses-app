import React from "react";

import Button from "../../../../common/Button/Button.tsx";
import { CourseInfoProps } from "../../../CourseInfo/CourseInfo.tsx";
import { getDuration } from "../../../../helpers/getCourseDuration.ts";
import { getAuthor } from "../../../../helpers/getAuthors.ts";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  onShowCourse: (courseProps: CourseInfoProps) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  creationDate,
  duration,
  authors,
  onShowCourse,
}) => {
  const courseDate: string = creationDate.split("/").join(".");
  const courseDuration: string = getDuration(duration);
  const courseAuthors = authors.map((item) => getAuthor(item)).join("   ");
  const handleShowCourse = () => {
    onShowCourse({
      id,
      title,
      description,
      courseDate,
      courseDuration,
      courseAuthors,
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
        <Button buttonText="show course" onClick={handleShowCourse} />
      </div>
    </div>
  );
};

export default CourseCard;
