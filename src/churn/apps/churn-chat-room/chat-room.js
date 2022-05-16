import { firebase, auth } from "./firebase/auth";
import { collection, doc, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "./firebase/auth";
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatMessage from "./chat-message";

const messagesRef = collection(db, "messages");

export default function ChatRoom() {
    const anchor = useRef();
    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState("");

    useEffect(() => {
        const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
        getDocs(q).then(snapshot => {
            var msgs = [];
            snapshot.forEach(m => msgs.push(m));

            setMessages(msgs.reverse());
        });
    }, [formValue]);

    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await setDoc(doc(db, "messages", uuidv4()), {
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    
        setFormValue("");
        anchor.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <React.Fragment>
            <main>
                {
                    messages.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)
                }
                <span ref={anchor} id="churn-anchor" />
            </main>
            <form id="churn-chat-form" onSubmit={sendMessage}>
                <input id="churn-chat-end-message-input" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button id="churn-chat-end-message-button" type="submit">🕊️</button>
            </form>
        </React.Fragment>
    )
}