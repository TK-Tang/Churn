import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "semantic-ui-react";
import Sidemenu from "./sidemenu.js";
import Home from "./apps/home.js";
import Commune from "./apps/commune/commune.js"

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
                        <Route index element={Home()} />
                    </Routes>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}