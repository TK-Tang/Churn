import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import "./App.css";

function TKTang() {
    return <h1>I ain't a smart guy.</h1>;
}

function SimonTang() {
    return <h1>Hello, I'm a human.</h1>
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/TKTang" element={TKTang()} />
                    <Route path="/SimonTang" element={SimonTang()} />
                    <Route path="/*" index element={<Landing/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;