import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Signup = () => {
  let [fname, Setfname] = useState("");
  let [number, Setnumber] = useState("");
  let [email, Setemail] = useState("");
  let [password, Setpassword] = useState("");
  let [companyname, Setcompanyname] = useState("");
  let navigate = useNavigate();
  // useState varaibles for each input field and navigate reference 
  function registeruser(event) {
    event.preventDefault();
    // to prevent reload on form submission
    if (password.trim().length < 6) {
      toast.error("Password should be atleast 6 characters!");
      return;
    }
    // basic validation for password length
    createUserWithEmailAndPassword(auth, email, password)
    // creating new user 
      .then((userCredential) => {
        // after creation
        adddatatodb();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        // validation for known error codes and fallback messsage for unkwon error 
        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email already exists , please use another email.");
        } else {
          toast.error("Error ocurred in making user!");
        }
      });
  }
  async function adddatatodb() {
    let { uid } = auth.currentUser;
    // to read the data from the collection for each user
    const collectionRef = collection(db, "user_details");
    // collection reference
    // making data object with all relevant details and uid is the uid of the newly created user for searching later on
    let data = {
      fname: fname,
      number: number,
      email: email,
      companyname: companyname,
      agency: document.getElementById("yes").checked,
      uid: uid,
    };
    addDoc(collectionRef, data)
    // adding doc to collection
      .then((docRef) => {
        toast.success(
          "Successfully created account, redirecting you to the profile page!"
        );
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
        // success toast and navigating to profile 1s
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error occured in saving data!");
        // toast error 
      });
  }
  return (
    <motion.div className="signup-cont" initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3}}>
      <p className="login-heading">Create your PopX account</p>
      <form className="signup-form" onSubmit={registeruser}>
        <Input
          type={"text"}
          required={true}
          name={"Full Name"}
          placeholder={"Enter your full name"}
          value={fname}
          onChange={(event) => Setfname(event.target.value)}
        ></Input>
        <Input
          type={"tel"}
          required={true}
          name={"Phone number"}
          placeholder={"Enter your phone number"}
          value={number}
          onChange={(event) => Setnumber(event.target.value)}
        ></Input>
        <Input
          type={"email"}
          required={true}
          name={"Email address"}
          placeholder={"Enter your email address"}
          value={email}
          onChange={(event) => Setemail(event.target.value)}
        ></Input>
        <Input
          type={"password"}
          required={true}
          name={"Password"}
          placeholder={"Enter your password"}
          value={password}
          onChange={(event) => Setpassword(event.target.value)}
        ></Input>
        <Input
          type={"text"}
          required={false}
          name={"Company name"}
          placeholder={"Enter your company name"}
          value={companyname}
          onChange={(event) => Setcompanyname(event.target.value)}
        ></Input>
        <Button
          text={"Create Account"}
          filled={true}
          optionalclass={"signupbtn"}
        ></Button>
        <p className="agency-signup">
          Are you an Agency?<span style={{ color: "red" }}>*</span>
        </p>
        <div style={{ marginTop: "0.813rem", display: "flex" }}>
          <label for="yes" className="label-flex">
            <input
              type="radio"
              id="yes"
              name="agency_radio"
              value={true}
              checked="checked"
            ></input>
            <span className="radio-label">Yes</span>
          </label>
          <label for="no" className="label-flex">
            <input
              type="radio"
              id="no"
              name="agency_radio"
              value={false}
            ></input>
            {/* made custom radio buttons check index.css to see the properties with apperance set to none to apply custom styles */}
            <span className="radio-label">No</span>
          </label>
        </div>
      </form>
      <ToastContainer />
      {/* toast container to allow toast to be visible */}
    </motion.div>
  );
};

export default Signup;
