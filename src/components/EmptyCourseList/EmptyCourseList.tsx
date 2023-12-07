import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CourseLink from "../../common/Link/Link.tsx";
import Button from "../../common/Button/Button.tsx";
import { RootState } from "../../store/index.ts";

const EmptyCourseList: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="empty">
      <h2>Course List is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      {user.role === "admin" ? (
        <CourseLink linkPath="/courses/add" linkText="add new course" />
      ) : (
        <Button
          buttonText="add new course"
          onClick={() =>
            alert(
              "You don't have permissions to create a course. Please log in as ADMIN"
            )
          }
        />
      )}
    </div>
  );
};
export default EmptyCourseList;
