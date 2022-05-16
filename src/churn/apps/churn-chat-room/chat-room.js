import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "./firebase-auth/index";
import ChatMessage from "./chat-message";

function ChatRoom() {
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);
    const [messages] = useCollectionData(query, {idField: "id"});

    return (
        <div>
            {
                messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
            }
        </div>
    )
}

export default ChatRoom;