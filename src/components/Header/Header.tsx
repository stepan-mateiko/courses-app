import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./components/Logo/Logo.tsx";
import Button from "../../common/Button/Button.tsx";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [storedToken, setStoredToken] = useState<string>("");

  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    setStoredToken(localStorage.getItem("token") || "");

    if (!storedToken && window.location.pathname !== "/registration") {
      navigate("/login");
    }
  }, [navigate, storedToken]);

  const logOut = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setUserName("");
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
