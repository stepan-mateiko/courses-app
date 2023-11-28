import React from "react";

import { getDuration } from "../../../../helpers/getCourseDuration.ts";
import { getAuthor } from "../../../../helpers/getAuthors.ts";
import CourseLink from "../../../../common/Link/Link.tsx";

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
  const courseDate: string = creationDate.split("/").join(".");
  const courseDuration: string = getDuration(duration);
  const courseAuthors = authors.map((item) => getAuthor(item)).join("   ");

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
        <CourseLink linkPath={`/courses/${id}`} linkText="show course" />
      </div>
    </div>
  );
};

export default CourseCard;
