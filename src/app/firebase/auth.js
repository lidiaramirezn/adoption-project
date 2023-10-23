import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { app } from './firebase'; 

export const auth = getAuth(app);

export function login() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function logout() {
  return auth.signOut()
  .then(()=> console.log("Adios!"))
  .catch(err=> console.log(err));
}