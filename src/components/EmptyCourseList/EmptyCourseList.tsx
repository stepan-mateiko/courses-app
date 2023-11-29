import React from "react";

import CourseLink from "../../common/Link/Link.tsx";

const EmptyCourseList: React.FC = () => {
  return (
    <div className="empty">
      <h2>Course List is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <CourseLink linkPath="/courses/add" linkText="add new course" />
    </div>
  );
};
export default EmptyCourseList;
