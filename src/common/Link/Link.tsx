import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  linkPath: string;
  linkText: string;
}
const CourseLink: React.FC<LinkProps> = ({ linkPath, linkText }) => {
  return (
    <Link to={linkPath} className="link">
      {linkText}
    </Link>
  );
};

export default CourseLink;
