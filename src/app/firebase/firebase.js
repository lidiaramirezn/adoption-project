import { initializeApp } from 'firebase/app';
import tree from './../state';

const firebaseConfig = {
  apiKey: "AIzaSyCuwlrMxw2IkXcp6Qb5Bsq59EzAcciswVM",
  authDomain: "adoption-project-app.firebaseapp.com",
  projectId: "adoption-project-app",
  storageBucket: "adoption-project-app.appspot.com",
  messagingSenderId: "934048194772",
  appId: "1:934048194772:web:202880841866ae4bfbdb41",
  measurementId: "G-BJ84XECPH2"
};

export const app = initializeApp(firebaseConfig);

import('./auth.js').then(function ({ auth }){
  auth.onAuthStateChanged(function(user){
    tree.select('user').set(
      JSON.parse(JSON.stringify(user))
    )
  });
});

import('./users.js').then(({ createUser })=>{
  tree.select('user').on('update',(e)=>{
    let user = e.data.currentData;
    if(user){
      createUser(user);
    }
  });
});
