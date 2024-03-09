import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "../../../firebase/clientApp";


const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
    return (
      <div
        style={{
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Login</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  
  export default SignInScreen;