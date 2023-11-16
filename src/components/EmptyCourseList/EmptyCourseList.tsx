import React from "react";

import Button from "../../common/Button/Button.tsx";

const EmptyCourseList: React.FC = () => {
  return (
    <div className="empty">
      <h2>Course List is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <Button buttonText="add new course" onClick={() => alert("Added")} />
    </div>
  );
};
export default EmptyCourseList;
