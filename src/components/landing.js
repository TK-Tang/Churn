import { React, Component } from "react";
import { Route, Switch} from "react-router-dom";
import {  Sidebar } from "semantic-ui-react";
import LeftSidebar from "./sidebars/LeftSidebar.js";
import Home from "./apps/home.js";
import Commune from "./apps/commune.js"

export default class Landing extends Component {
    constructor(props){
        super(props);

        this.state = {
            app: "/"
        }
    }

    setAppDisplayed(url){
        this.props.history.replace(url);
        this.setState({app:url});
    }

    render() {
        return(
            <Sidebar.Pushable>
                <LeftSidebar
                    apps={this.apps}
                    setAppDisplayed={this.setAppDisplayed.bind(this)}
                />
                <Sidebar.Pusher>
                    <Switch>
                        <Route
                            exact path="/commune" 
                            render={() => <Commune/>} 
                        />
                        <Route
                            exact path="/" 
                            render={() => <Home/>} 
                        />
                    </Switch>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}