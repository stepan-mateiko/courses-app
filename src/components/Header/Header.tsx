import React from "react";

import Logo from "./components/Logo/Logo.tsx";
import Button from "../../common/Button/Button.tsx";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__btn">
        <p>Harry Potter</p>
        <Button buttonText="logout" onClick={() => alert("Hi")} />
      </div>
    </header>
  );
};

export default Header;
