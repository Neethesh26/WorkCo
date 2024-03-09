import React from "react";
import firebase from "../../../firebase/clientApp";


const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

  export default SignInScreen;