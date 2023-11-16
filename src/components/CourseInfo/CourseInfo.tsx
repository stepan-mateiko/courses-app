import React from "react";

import Button from "../../common/Button/Button.tsx";

export interface CourseInfoProps {
  id: string;
  title: string;
  description: string;
  courseDate: string;
  courseDuration: string;
  courseAuthors: string;
  onBack: () => void;
}

const CourseInfo: React.FC<CourseInfoProps> = ({
  id,
  title,
  description,
  courseDate,
  courseDuration,
  courseAuthors,
  onBack,
}) => {
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
      <Button buttonText="Back" onClick={onBack} />
    </div>
  );
};

export default CourseInfo;
