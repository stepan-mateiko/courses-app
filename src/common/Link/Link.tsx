import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  linkPath: string;
  linkText: string;
  element?: ReactNode;
}
const CourseLink: React.FC<LinkProps> = ({ linkPath, linkText, element }) => {
  return (
    <Link to={linkPath} className="link">
      {!element ? linkText.toUpperCase() : element}
    </Link>
  );
};

export default CourseLink;
