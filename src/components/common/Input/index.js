import React from "react";
import "./styles.css";

function Input({ type, required, name, placeholder, value, onChange }) {
  // type for type of input,required for adding * , rest all of them are selfexplanatory
  return (
    <div className="input-cont">
      <p className="input-label">
        {name}
        {required ? <span style={{ color: "red" }}>*</span> : ""}
      </p>
      <input
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
        className="input-custom"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Input;
