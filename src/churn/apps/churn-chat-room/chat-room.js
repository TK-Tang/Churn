import { firebase, auth } from "./firebase/auth";
import { collection, doc, getDocs, limit, orderBy, query, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase/auth";
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatMessage from "./chat-message";
import MessagesSchema from "./firebase/messages-collection";

const messagesRef = collection(db, MessagesSchema.COLLECTION_NAME);

export default function ChatRoom() {
    const anchor = useRef();
    let unsubscribe = () => { };

    const [initialMessageHistory, setInitialMessageHistory] = useState([]);
    const [incomingMessageHistory, setIncomingMessageHistory] = useState([]);
    const [messageFormValue, setMessageFormValue] = useState("");

    useEffect(() => {
        const q = query(messagesRef, orderBy(MessagesSchema.CREATED_AT, "desc"), limit(25));
        getDocs(q).then(snapshot => {
            var newMessages = [];
            snapshot.forEach(m => newMessages.push(m));
            setInitialMessageHistory(newMessages.reverse());
        });

        unsubscribe = onSnapshot(query(messagesRef, orderBy(MessagesSchema.CREATED_AT, "desc"), limit(1)), (snapshot) => {
            var newMessages = [];
            snapshot.forEach(m => newMessages.push(m));
            setIncomingMessageHistory(incomingMessageHistory.concat(newMessages));
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        anchor.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, [messageFormValue, incomingMessageHistory, initialMessageHistory]);

    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await setDoc(doc(db, MessagesSchema.COLLECTION_NAME, uuidv4()), {
            text: messageFormValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    
        setMessageFormValue("");
    }

    return (
        <React.Fragment>
            <main>
                {
                    initialMessageHistory.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)
                }
                {
                    incomingMessageHistory.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)
                }
                <span ref={anchor} id="churn-anchor"/>
            </main>
            <form 
                id="churn-chat-form" 
                onSubmit={sendMessage}
            >
                <input 
                    id="churn-chat-end-message-input" 
                    type="text" 
                    value={messageFormValue} 
                    onChange={(e) => setMessageFormValue(e.target.value)}
                />
                <button 
                    id="churn-chat-end-message-button" 
                    type="submit"
                >
                    🕊️
                </button>
            </form>
        </React.Fragment>
    );
}