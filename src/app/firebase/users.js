import { getFirestore,doc,  setDoc } from "firebase/firestore";
import { app } from './firebase';

const db = getFirestore(app);

export function createUser(user) {
  const docRef = doc(db, "users", user.uid);
  return setDoc(docRef, {
    name: user.displayName,
    emai: user.email,
    photo: user.photoURL,
    uid: user.uid
  });
}
