import axios from "axios";
import CONSTANTS from "../CONSTANTS";

const baseURL = CONSTANTS.baseUrl;

const getDevicesList = () => {
    const devicesListUrl = baseURL + "devices";
    return axios.get(devicesListUrl);
}

const devicesApi = {
    getDevicesList
}

export default devicesApi;