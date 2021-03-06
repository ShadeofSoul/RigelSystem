import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import "./ForumPage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import fire from "../firebase/Fire";

const auth = fire.auth();
console.log(auth);
const firestore = fire.firestore();
const ForumPage = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='forum'>
      <div className='forumContainer'>
        <header className='forumHeader'>
          <SignOut className='ml-1/2' />
        </header>

        <section className='forumSection'>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    </div>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className='sign-in' onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  console.log(auth.currentUser);
  return (
    auth.currentUser && (
      <button className='sign-out text-center' onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  console.log(dummy);
  const messagesRef = firestore.collection("users");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    // console.log(auth.currentUser);

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className='forumMain'>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className='forumForm' onSubmit={sendMessage}>
        <input
          className='forumInput'
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder='Write something here'
        />

        <button className='forumFormBtn' type='submit' disabled={!formValue}>
          send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  // console.log(auth.currentUser);

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className='forumImage'
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className='forumParagr'>{text}</p>
      </div>
    </>
  );
}
console.log(auth);

export default ForumPage;
