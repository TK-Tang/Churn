import { firebase, auth } from "./firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./chat-room";


function ChurnChatRoom() {
    const [user] = useAuthState(auth);

    return (
        <div className="churn-chat-room">
            <header className="churn-chat-room-header">
                <h1>⚛️🔥💬 Originally by Fireship</h1>
                <SignOut />
            </header>
            <section>
                { user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    )
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    
    return (
        <button onClick={signInWithGoogle}>Sign in with google</button>
    );
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    );
}

export default ChurnChatRoom;