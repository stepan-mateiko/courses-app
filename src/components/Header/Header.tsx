import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "./components/Logo/Logo.tsx";
import Button from "../../common/Button/Button.tsx";
import { UserActionTypes } from "../../store/user/types.ts";
import { UserType } from "../../store/user/types.ts";

interface RootState {
  user: UserType;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [storedToken, setStoredToken] = useState<string>("");
  const userName = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    setStoredToken(localStorage.getItem("token") || "");

    if (!storedToken && window.location.pathname !== "/registration") {
      navigate("/login");
    }
  }, [navigate, storedToken]);

  const logOut = () => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
    localStorage.removeItem("token");
    setStoredToken("");
    navigate("/login");
  };

  return (
    <header className="header">
      <Logo />
      <div className="header__btn">
        <p>{userName}</p>
        {storedToken && <Button buttonText="logout" onClick={logOut} />}
      </div>
    </header>
  );
};

export default Header;
