import { firebase } from "./firebase-auth/index";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./chat-room";

const auth = firebase.auth();

function ChurnChatRoom() {
    const [user] = useAuthState(auth);

    return (
        <div className="churn-chat-room">
            <header className="churn-chat-room-header">
                <h1>⚛️🔥💬</h1>
                <SignOut />
            </header>
            <section>
                { user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    )
}

function signInWithGoogle()  {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function SignIn() {
   
    
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