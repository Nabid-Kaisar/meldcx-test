import {Route} from "react-router";
import Devices from "../components/devices/Devices";
import Login from "../components/login/Login";
import React from "react";

const LoginComponent = <Route path="/login" key="login" component={Login}/>
const DevicesComponent = <Route path="/devices" key="devices" component={Devices}/>

const ComponentsList = [LoginComponent, DevicesComponent]

export default ComponentsList;