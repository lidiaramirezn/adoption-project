import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { app } from './firebase';

export const db = getFirestore(app);

export function create(pet) {
  const collectionRef = collection(db, "pets");
  
  return addDoc(collectionRef, pet);
}

export async function getPetInformation(){
  const collectionRef = collection(db, "pets");
  const querySnapshot = await getDocs(collectionRef);

  const pets = [];

  querySnapshot.forEach((doc)=>{
    let todoJSON = {
      id: doc.id,
      ...doc.data()
    }
    pets.push(todoJSON);
  });

  return pets;
}