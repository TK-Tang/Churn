import { React, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/landing";
import "./App.css";

function TKTang() {
    return <h1>I ain't a smart guy.</h1>;
}

function SimonTang() {
    return <h1>Hello, I'm a human.</h1>
}

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/TKTang">
                        <TKTang/>
                    </Route>
                    <Route path="/SimonTang">
                        <SimonTang/>
                    </Route>
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        );
    }
}