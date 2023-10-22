import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { app } from './firebase';

export const db = getFirestore(app);

export function create(pet) {

  const collectionRef = collection(db, "pets");
  
  return addDoc(collectionRef, pet);
}