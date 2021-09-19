import axios from "axios";
import CONSTANTS from "../CONSTANTS";
import util from "../util";
import NotifyRequestBody from "../models/notifyRequestBody";

const baseURL = CONSTANTS.baseUrl;

const getDevicesList = () => {
    const devicesListUrl = baseURL + "devices";
    return axios.get(devicesListUrl);
}

const doNotify = (notify: NotifyRequestBody) => {
    const notifyUrl = baseURL + "notify";
    return axios.post(notifyUrl, notify, {headers: {Authorization: `Bearer ${util.getCookies(CONSTANTS.authTokenNameOfCookie)}`}});
}

const devicesApi = {
    getDevicesList,
    doNotify
}

export default devicesApi;