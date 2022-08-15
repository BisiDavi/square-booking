import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import useFirebase from "@/hooks/useFirebase";

export default function useAuth() {
  const { initFB } = useFirebase();
  const app = initFB();

  async function authSignup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    const auth: any = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        console.log(err)
      );
      await sendEmailVerification(auth.currentUser).catch((err) =>
        console.log(err)
      );
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      }).catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
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
