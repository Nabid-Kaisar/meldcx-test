import axios from "axios";
import LoginReqBody from "../models/loginReqBody";

const baseURL = "http://35.201.2.209:8000/";

const doLogin = (loginReq: LoginReqBody) => {
    const loginUrl = baseURL + "login";
    return axios.post(loginUrl, loginReq);
}

const loginApi = {doLogin}

export default loginApi;