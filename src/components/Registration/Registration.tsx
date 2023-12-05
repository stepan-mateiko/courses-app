import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import Input from "../../common/Input/Input.tsx";

const Registration: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string) => {
      setter(newValue);
    };

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
    navigate("/login");
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Registration</h2>
      <form onSubmit={handleSubmit} className="registration__form">
        <Input
          type="text"
          label="Name"
          placeholder="Input name"
          value={userName}
          onChange={handleInputChange(setUserName)}
          pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
          title="Please enter your full name with both words starting with capital letters."
        />
        <Input
          type="email"
          label="Email"
          placeholder="Input email"
          value={userEmail}
          onChange={handleInputChange(setUserEmail)}
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address in the format user@example.com."
        />
        <Input
          type="password"
          label="Password"
          placeholder="Input password"
          value={userPassword}
          onChange={handleInputChange(setUserPassword)}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long."
        />

        <button type="submit" className="btn registration__btn">
          REGISTRATION
        </button>

        <p>
          {"If you have an account you may "} <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
