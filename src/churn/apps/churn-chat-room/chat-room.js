import { firebase, auth } from "./firebase-auth/auth";
import { collection, getDocs, limit, orderBy, query} from "firebase/firestore";
import { db } from "./firebase-auth/auth";
import { useEffect, useState } from 'react';
import ChatMessage from "./chat-message";

const messagesRef = collection(db, "messages");

export default function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState("");

    useEffect(() => {
        const q = query(messagesRef, orderBy("createdAt"), limit(25));
        getDocs(q).then(snapshot => {
            var msgs = [];
            snapshot.forEach(m => msgs.push(m));

            setMessages(msgs);
        });
    }, []);

    const sendMessage = async(e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messagesRef.Add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    
        setFormValue("");
    }

    return (
        <div>
            {
                messages.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)
            }

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit">🕊️</button>
            </form>
        </div>
    )
}