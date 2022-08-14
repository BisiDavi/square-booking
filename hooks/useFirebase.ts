// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRef } from "react";

import useToast from "@/hooks/useToast";
import { firebaseConfig } from "@/lib/firebaseConfig";
import useUI from "@/hooks/useUI";

export default function useFirebase() {
  const toastId = useRef(null);
  const { loadingToast, updateToast } = useToast();
  const { toggleModal } = useUI();
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function authSignup(email: string, password: string) {
    loadingToast(toastId);
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        updateToast(toastId, "success", "Auth sign up successfull");
        toggleModal(null);
      })
      .catch(() => {
        updateToast(toastId, "error", "Auth sign up error");
      });
  }

  function authSignIn(email: string, password: string) {
    loadingToast(toastId);
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        updateToast(toastId, "success", "Auth sign up successful");
        toggleModal(null);
      })
      .catch(() => {
        updateToast(toastId, "error", "oops, an error occurred");
      });
  }

  function authSignOut() {
    const auth = getAuth();
    loadingToast(toastId);

    return signOut(auth)
      .then((data) => {
        console.log("user", data);
        updateToast(toastId, "success", "logout successful");
        toggleModal(null);
      })
      .catch(() => {
        updateToast(toastId, "error", "logout successful");
      });
  }

  return { app, analytics, authSignup, authSignIn, authSignOut };
}
