// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef } from "react";

import useToast from "@/hooks/useToast";
import { firebaseConfig } from "@/lib/firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default function useFirebase() {
  const ref = useRef(null);
  const { loadingToast, updateToast } = useToast();
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function authSignup(email: string, password: string) {
    const toastId: any = loadingToast(ref);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        updateToast(toastId, "success", "Auth sign up successfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "error",
          error,
          "errorMessage",
          errorMessage,
          "errorCode",
          errorCode
        );
        updateToast(toastId, "error", "Auth sign up error");
      });
  }

  function signIn(email: string, password: string) {
    const toastId: any = loadingToast(ref);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        updateToast(toastId, "success", "Auth sign up successfull");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "error",
          error,
          "errorMessage",
          errorMessage,
          "errorCode",
          errorCode
        );
      });
  }

  return { app, analytics, authSignup, signIn };
}
