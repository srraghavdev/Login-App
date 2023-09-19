import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [email, Setemail] = useState("");
  let [password, Setpassword] = useState("");
  // email and password useState variables
  let navigate = useNavigate();
  // navigate refrence
  function loginuser(event) {
    event.preventDefault();
    // to prevent reload on submit of form 
    // firestore method to sign in with email and pass with auth reference
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        toast.success(
          "Successfully logged in , redirecting you to the profile page!"
        );
        readandsetdatafromdb(userCredential.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        // basic validation for some known error codes with a fail safe 
        if (errorCode === "auth/invalid-login-credentials") {
          toast.error("Invalid login credentials, please try again !");
        } else if (errorCode === "auth/user-not-found") {
          toast.error(
            "No user found with these credentials, please try again."
          );
        } else {
          toast.error("Some error occurred in logging in !");
        }
      });
  }

  async function readandsetdatafromdb(uid){
    const colRef = collection(db, "user_details");
    // getting collection refrence with collection method supplying db reference and collection name(user_details)
    const docsSnap = await getDocs(colRef);
    // getDocs with colref(collectiion reference) to get all documents in the collection
    docsSnap.forEach((doc) => {
      // iterating over all documents to find the document with matching uid of logged in user
      let temp = { ...doc.data() };
      // .data() to extract saved object 
      if (temp.uid == uid) {
        // checking for uid equality and navigating after 1 sec
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
        return;
      }
    });
  }

  return (
    <div className="login-cont">
      <ToastContainer></ToastContainer>
      <p className="login-heading">Signin to your PopX account</p>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={loginuser}>
        <Input
          type={"email"}
          required={true}
          name={"Email Address"}
          placeholder={"Enter email address"}
          value={email}
          onChange={(event) => Setemail(event.target.value)}
        ></Input>
        <Input
          type={"password"}
          required={true}
          name={"Password"}
          placeholder={"Enter password"}
          value={password}
          onChange={(event) => Setpassword(event.target.value)}
        ></Input>
        <Button
          text={"Login"}
          filled={true}
          optionalclass={"inputbtn"}
        ></Button>
      </form>
    </div>
  );
};
export default Login;
