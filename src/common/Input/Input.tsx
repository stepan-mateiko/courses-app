import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  pattern: string;
  title: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  pattern,
  title,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-block">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required
      />
      <div className="error-message" id="name-error"></div>
    </div>
  );
};

export default Input;
