import { initializeApp } from 'firebase/app';
import tree from './../state';

const firebaseConfig = {
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
    console.log('USERS', user);
    if(user){
      createUser(user);
    }
  });
});
