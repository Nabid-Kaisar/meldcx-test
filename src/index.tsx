import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from "react-router";
import util from "./util";
import Login from "./components/login/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                {/*default entry path of the app is login...*/}
                <Route exact path="/" component={Login}/>
                {/*more paths... */}
                {util.renderAllRoutes()}
            </Switch>
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
