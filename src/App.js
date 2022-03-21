import { React, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import './App.css';

function User(props) {
    return <h1>Hello 123123!</h1>;
}

function Xyz(props) {
    return <h1>Hello 123asdfasdf123!</h1>;
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/asdf">
                        <Landing/>
                    </Route>
                    <Route path="/zxcv">
                        <Xyz/>
                    </Route>
                </Switch>
                asfasdfasdf123
            </BrowserRouter>
        );
    }
}

export default App;