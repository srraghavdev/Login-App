import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <motion.div className="container" initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.3}}>
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
    </motion.div>
  );
};

export default LandingPage;
