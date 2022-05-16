import { collection, getDocs, limit, orderBy, query} from "firebase/firestore";
import { db } from "./firebase-auth/auth";
import { useEffect, useState } from 'react';
import ChatMessage from "./chat-message";

export default function ChatRoom() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const messageRef = collection(db, "messages");
        const q = query(messageRef, orderBy("createdAt"), limit(25));
        getDocs(q).then(snapshot => {
            var msgs = [];
            snapshot.forEach(m => msgs.push(m));

            setMessages(msgs);
        });
    }, []);

    return (
        <div>
            {
                messages.map(msg => <ChatMessage key={msg.id} message={msg.data()} />)
            }
        </div>
    )
}