import axios from "axios";
import React from "react";
import LoginReqBody from "../models/loginReqBody";

const baseURL = "http://35.201.2.209:8000/";

const doLogin = (loginReq: LoginReqBody) => {
    const loginUrl = baseURL + "login";
    return axios.post(loginUrl, loginReq);
}

export default {doLogin};