import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";
import Sidemenu from "./sidemenu";
import Home from "./apps/home";
import Commune from "./apps/commune/commune";
import ChurnChatRoom from "./apps/churn-chat-room/churn-chat-room";


export default class Landing extends Component {
    render() {
        return(
            <Sidebar.Pushable>
                <Sidemenu
                    apps={this.apps}
                />
                <Sidebar.Pusher className="main-contents">
                    <Routes>
                        <Route path="/commune" element={<Commune/>} />
                        <Route path="/churn-chat-room" element={<ChurnChatRoom/>} />
                        <Route index element={Home()} />
                    </Routes>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}