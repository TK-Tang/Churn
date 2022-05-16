import { auth } from "./firebase/auth";

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "churn-chat-sent" : "churn-chat-received";

    return (
        <div className={`churn-chat ${messageClass}`}>
            <img className="churn-chat-img"src={photoURL} />
            <p className="churn-chat-text">{text}</p>
        </div>
    );
}

export default ChatMessage;