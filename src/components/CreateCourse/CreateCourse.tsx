import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../common/Input/Input.tsx";
import Button from "../../common/Button/Button.tsx";
import CourseLink from "../../common/Link/Link.tsx";
import { mockedAuthorsList } from "../../constants.ts";
import { Delete } from "../Icon/Icon.tsx";
import { getDuration } from "../../helpers/getCourseDuration.ts";

interface Author {
  id: string;
  name: string;
}

const CreateCourse: React.FC = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    duration: 0,
  });

  const [author, setAuthor] = useState<string>("");
  const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
  const [allAuthors, setAllAuthors] = useState<Author[]>(mockedAuthorsList);

  const navigate = useNavigate();

  const handleInputChange = (field: string) => (newValue: string | number) => {
    setCourseData((prevData) => ({ ...prevData, [field]: newValue }));
  };

  const handleCreateAuthor = () => {
    const { v4: uuidv4 } = require("uuid");
    const newAuthorId = uuidv4();
    const newAuthor: Author = {
      id: newAuthorId,
      name: author,
    };

    setAllAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
    setAuthor("");
  };

  const handleAddCourseAuthor = (author: Author) => {
    setCourseAuthors((prevCourseAuthors) => [...prevCourseAuthors, author]);
  };

  const handleDeleteAuthor = (author: Author) => {
    setAllAuthors((prevAuthors) =>
      prevAuthors.filter((item) => item.id !== author.id)
    );
  };

  const handleDeleteCourseAuthor = (author: Author) => {
    setCourseAuthors((prevAuthors) =>
      prevAuthors.filter((item) => item.id !== author.id)
    );
  };

  const handleCreateCourse = () => {
    if (!isValidCourseData()) {
      alert("Please fill in all required fields and add at least one author.");
      return;
    }

    const { v4: uuidv4 } = require("uuid");
    const courseId = uuidv4();
    const today = new Date();
    const formattedDate = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;

    const newCourse = {
      id: courseId,
      title: courseData.title,
      description: courseData.description,
      duration: courseData.duration,
      authors: courseAuthors.map((item) => item.id),
      creationDate: formattedDate,
    };

    const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");
    const updatedCourses = [...existingCourses, newCourse];

    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    resetForm();
    navigate("/courses");
  };

  const isValidCourseData = () => {
    return (
      courseData.title &&
      courseData.description &&
      courseData.duration > 0 &&
      courseAuthors.length > 0
    );
  };

  const resetForm = () => {
    setCourseData({ title: "", description: "", duration: 0 });
    setCourseAuthors([]);
    setAuthor("");
  };

  return (
    <div className="create">
      <h2>Course edit/create page</h2>
      <form className="create__form">
        <div className="create__main">
          <h3>Main info</h3>
          <Input
            type="text"
            label="Title"
            placeholder="Input text"
            value={courseData.title}
            onChange={handleInputChange("title")}
            pattern="(?:[A-Z][a-z]+)(?:\s[A-Z][a-z]+)*"
            title="Please enter one or more words, each starting with a capital letter."
          />
          <Input
            type="textarea"
            label="Description"
            placeholder="Input text"
            value={courseData.description}
            onChange={handleInputChange("description")}
          />
        </div>
        <div className="create__duration">
          <h3>Duration</h3>
          <div className="create__duration-wrapper">
            <Input
              type="number"
              label="Duration"
              placeholder="Input course duration in minutes"
              value={courseData.duration}
              onChange={handleInputChange("duration")}
            />
            <p>{getDuration(courseData.duration)}</p>
          </div>
        </div>
        <div className="create__authors">
          <div className="create__authors-all">
            <h3>Authors</h3>
            <div className="create__authors-input">
              {" "}
              <Input
                type="text"
                label="Authors name"
                placeholder="Input authors name"
                value={author}
                onChange={handleInputChange("author")}
                pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
                title="Please enter your full name with both words starting with capital letters."
              />
              <Button
                buttonText="create author"
                onClick={() => handleCreateAuthor()}
              />
            </div>

            <h4>All Authors</h4>
            <ul>
              {allAuthors.map((item) => (
                <li key={item.id}>
                  {item.name}{" "}
                  <span>
                    {" "}
                    <button onClick={() => handleAddCourseAuthor(item)}>
                      +
                    </button>{" "}
                    <button onClick={() => handleDeleteAuthor(item)}>
                      <Delete />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="create__authors-course">
            <h3>Course Authors</h3>
            {courseAuthors.length === 0 && <p>Author list is empty</p>}
            <ul>
              {courseAuthors.map((item) => (
                <li key={item.id}>
                  {item.name}{" "}
                  <button onClick={() => handleDeleteCourseAuthor(item)}>
                    <Delete />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
      <div className="create__btns">
        <CourseLink linkPath="/courses" linkText="cancel" />
        <Button
          buttonText="create course"
          onClick={() => handleCreateCourse()}
        />
      </div>
    </div>
  );
};

export default CreateCourse;
