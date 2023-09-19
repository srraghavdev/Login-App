import React from "react";
import "./styles.css";
const Button = ({ text, filled, optionalclass, onClick }) => {
    // optional class to add custom styles to the button, filled for filled background and onClick for executing a function on the click of the button
  return (
    <button
      className={optionalclass ? "btn-div " + optionalclass : "btn-div"}
      style={{
        color: filled ? "#FFFFFF" : "#1D2226",
        background: filled
          ? "#6C25FF 0% 0% no-repeat padding-box"
          : "#6C25FF4B 0% 0% no-repeat padding-box",
      }}
      onClick={onClick ? onClick : () => console.log("1")}
    >
      {text}
    </button>
  );
};

export default Button;
