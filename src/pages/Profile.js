import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import Button from "../components/common/Button";
function Profile() {
  let [isLoading, SetisLoading] = useState(true);
  let [fname, Setfname] = useState("");
  let [email, Setemail] = useState("");
  let navigate = useNavigate();
  // use State variables and navigate reference (isLoading for loader visibility)
  useEffect(() => {
    (async () => {
      SetisLoading(true);
      // start loader
      if (!auth.currentUser) {
        toast.error("Please login!");
        navigate("/login");
        // redirecting user to login page if they are not signed in by checking auth.currentUser
        return;
      }
      let uid = auth.currentUser.uid;
      await readandsetdatafromdb(uid);
      SetisLoading(false);
      // end loader
    })();
    // iffe for setting fname and email variables
  }, []);

  async function readandsetdatafromdb(uid) {
    const colRef = collection(db, "user_details");
    // collection reference
    const docsSnap = await getDocs(colRef);
    // docsnap constains all documents in our collection 
    docsSnap.forEach((doc) => {
      let temp = { ...doc.data() };
      if (temp.uid == uid) {
        Setfname(temp.fname);
        Setemail(temp.email);
        // setting fname and email useState
        return;
      }
    });
  }
  async function signout() {
    // signout function takes auth reference
    signOut(auth)
      .then(() => {
        toast.success(
          "Successfully logged out, redirecting you to the home page !"
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // redirecting user to the home page on successfull logout
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("Some error occurred , couldn't log out !");
        // error toast
      });
  }
  return (
    <div className="profile-container">
      <header className="profile-header">Account Settings</header>
      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        // loader when isLoading is true 
      ) : (
        <div className="icon-info">
          <div className="icon-container">
            <Avatar name={fname} round={true} size={"4.75rem"}></Avatar>
            <div className="camera-container"></div>
          </div>
          <div className="info-container">
            <p className="person-name">{fname}</p>
            <p className="person-email">{email}</p>
          </div>
        </div>
      )}
      <p className="lorem-profile">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <ToastContainer />
      <p className="dotted signout"></p>
      <div className="signoutbtn-cont">
        <Button
          text={"Logout"}
          onClick={() => signout()}
          filled={true}
          optionalclass={"signout-btn"}
        ></Button>
      </div>
      <p className="dotted custome"></p>
    </div>
  );
}

export default Profile;
