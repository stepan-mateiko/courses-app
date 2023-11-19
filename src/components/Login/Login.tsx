import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import Input from "../../common/Input/Input.tsx";

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (newValue: string) => {
      setter(newValue);
    };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/courses");
    }
  }, [navigate]);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.result.slice(7);
      localStorage.setItem("token", token);
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
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit} className="login__form">
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

        <button type="submit" className="btn login__btn">
          LOGIN
        </button>

        <p>
          {"If you don't have an account you may "}{" "}
          <Link to="/registration">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
