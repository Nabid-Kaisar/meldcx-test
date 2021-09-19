import React, {useState, useEffect} from "react";
import devicesApi from "../../apiHandlers/devicesApi";
import DeviceResponseModel from "../../models/deviceResponseModel";
import CONSTANTS from "../../CONSTANTS";
import util from "../../util";

function Devices() {
    const [devicesList, setDevicesList] = useState([]);
    let setTimeOutRef: NodeJS.Timeout;

    const getDevicesList = () => {
        devicesApi.getDevicesList()
            .then(res => {
                setDevicesList(res.data.devices);
                setTimeOutRef = setTimeout(() => getDevicesList(), CONSTANTS.pollingInterval)
                console.log(setTimeOutRef);
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getDevicesList();

        return () => {
            window.clearTimeout(setTimeOutRef);
        }
    }, []);

    const handleOnClickLogout = () => {
        util.removeCookies(CONSTANTS.authTokenNameOfCookie);
    }

    return (
        <div>
            {devicesList.map((device: DeviceResponseModel, idx) => {
                return <ul>{device.id} : {device.name}</ul>
            })}
            <button onClick={handleOnClickLogout}>Logout</button>
        </div>
    )
}

export default Devices;