import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function useAuth() {
  const auth = getAuth();
  function authSignup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function authSignIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function authSignOut() {
    return signOut(auth);
  }

  return { authSignup, authSignIn, authSignOut };
}
