import { React, Component,  useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Checkbox, Segment, Sidebar } from "semantic-ui-react";
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
        this.setState({app:url});
        this.props.history.push(url);
    }

    render() {
        return(
            <Sidebar.Pushable>
                <LeftSidebar
                    apps={this.apps}
                    setAppDisplayed={this.setAppDisplayed.bind(this)}
                />
                <Sidebar.Pusher>
                    <BrowserRouter>
                        <Switch>
                            <Route
                                exact path="/" 
                                render={() => <Home/>} 
                            />
                            <Route
                                exact path="/commune" 
                                render={() => <Commune/>} 
                            />
                        </Switch>
                    </BrowserRouter>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}