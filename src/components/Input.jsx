import React from "react";
import "@/styles/Input.css";

const Input = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  name,
  disabled,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };

  return (
    <div className="input__container">
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
        onChange={handleChange}
        disabled={disabled}
      />
      <label className="label">{label}</label>
    </div>
  );
};

export default Input;
