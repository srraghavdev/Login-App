import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <div className="container">
      <p className="heading">Welcome to PopX</p>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      {/* Buttons with onclicks to navigate to signup and login page */}
      <Button
        text={"Create Account"}
        filled={true}
        onClick={() => navigate("/signup")}
      ></Button>
      <Button
        text={"Already Registered? Login"}
        filled={false}
        onClick={() => navigate("/login")}
      ></Button>
    </div>
  );
};

export default LandingPage;
