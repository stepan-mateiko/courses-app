import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "../../common/Input/Input.tsx";
import { UserActionTypes } from "../../store/user/types.ts";
import { userAPI } from "../../store/services.ts";

const Login: React.FC = () => {
  const dispatch = useDispatch();
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
      const response = await userAPI.login({
        email: userEmail,
        password: userPassword,
      });
      const loggedUser = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.result,
      };

      localStorage.setItem("token", response.data.result);

      dispatch({
        type: UserActionTypes.LOGIN,
        payload: loggedUser,
      });
      navigate("/courses");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePostRequest();
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
