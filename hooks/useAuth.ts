import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { firebaseConfig } from "@/lib/firebaseConfig";

export default function useAuth() {
  const app = initializeApp(firebaseConfig);
  function authSignup(email: string, password: string) {
    const auth = getAuth(app);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function authSignIn(email: string, password: string) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function authSignOut() {
    const auth = getAuth(app);
    return signOut(auth);
  }

  return { authSignup, authSignIn, authSignOut };
}
