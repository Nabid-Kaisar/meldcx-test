import axios from "axios";
import React from "react";
import CONSTANTS from "../CONSTANTS";

const baseURL = CONSTANTS.baseUrl;

const getDevicesList = () => {
    const devicesListUrl = baseURL + "devices";
    return axios.get(devicesListUrl);
}

export default {getDevicesList};