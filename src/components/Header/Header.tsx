import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "./components/Logo/Logo.tsx";
import Button from "../../common/Button/Button.tsx";
import { UserType } from "../../store/user/types.ts";
import { logOut } from "../../store/user/thunk.ts";

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

  const handleLogOut = () => {
    setStoredToken("");
    dispatch(logOut(storedToken) as any);
    navigate("/login");
  };

  return (
    <header className="header">
      <Logo />
      <div className="header__btn">
        <p>{userName}</p>
        {storedToken && <Button buttonText="logout" onClick={handleLogOut} />}
      </div>
    </header>
  );
};

export default Header;
