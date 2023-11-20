import { initializeApp } from 'firebase/app';
import tree from './../state';

let initializedApp ;

//FIXME: Revisar tiempo de carga, no está funcionando bien el await
fetch('/__/firebase/init.json').then(async response => {
  const firebaseConfig = await response.json();
  initializedApp = initializeApp(firebaseConfig);
});

export const app = initializedApp;

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
