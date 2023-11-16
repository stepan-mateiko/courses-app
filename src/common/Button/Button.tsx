import React from "react";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
