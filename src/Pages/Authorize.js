import React, {useRef, useState} from 'react';
import '../css/authorize.css';

import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCQlT0LNx8_YqWjwW6p08V0o5-RvFOiYCI",
    authDomain: "routerdemo-c3494.firebaseapp.com",
    projectId: "routerdemo-c3494",
    storageBucket: "routerdemo-c3494.appspot.com",
    messagingSenderId: "372531011677",
    appId: "1:372531011677:web:6f468407663b590e4b6db4",
    measurementId: "G-81PN7Z7T1D"
});
 export const auth =firebase.auth();
const firestore = firebase.firestore();



function Authorize() {

  const [user] =useAuthState(auth);
  // console.log(user);
  return (
    <div className="chatboxContainer">
      
    <div className="SignApp">
      <section>
        {user ? < Chatroom /> : <SignIn />}
      </section>

    </div>
    </div>
  );
}
export const SignIn=()=> {
  const signInWithGoogle =()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    console.log(provider);
  }
  return (
    <button className='SignIn-btn' onClick={signInWithGoogle}>Sign in with Google</button>
  )
  
}
export const SignOut=()=> {
  return auth.currentUser &&(
    <button className='SignIn-btn' onClick={()=>auth.signOut( )}>SignOut</button>
  )
  
}
export const  Chatroom= ()=> {
  const dummy = useRef();
  const messagesRef =firestore.collection('messages');
  console.log(firestore.collection('messages'));

  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages]= useCollectionData(query, {idField: 'id'});
  console.log([messages]);

  const[formValue, setFormValue] = useState('');

  const sendMessage = async(e) =>{
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');

    dummy.current.scrollIntoView({behavior : 'smooth'});
  }

  return(
    <>
    <main className="chatbox">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
     <div ref={dummy} className='chatholder'></div>
    </main>
    
    <form action="" onSubmit={sendMessage}>
      <input value={formValue} onChange={(e)=> setFormValue(e.target.value)} />
      <button type="submit">🌭</button>
    </form>

    </>
  )
  
}
export const ChatMessage=(props)=> {
 const {text, uid, photoURL} =props.message;
 console.log(text);
 const messageClass= uid ===auth.currentUser.uid ? 'sent' : 'received';

  return( 
  <div className={`message${messageClass}`}>
    <img src={photoURL} alt="Sorry you suck" className='imgcontainer'/>
  <p>{text}</p>
  </div>
  )
}

export default Authorize;