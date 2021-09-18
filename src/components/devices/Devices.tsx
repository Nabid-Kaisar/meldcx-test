import React, {useState, useEffect} from "react";
import devicesApi from "../../apiHandlers/devicesApi";
import DeviceResponseModel from "../../models/deviceResponseModel";
import CONSTANTS from "../../CONSTANTS";

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

    return (
        <div>
            {devicesList.map((device: DeviceResponseModel, idx) => {
                return <ul>{device.id} : {device.name}</ul>
            })}
        </div>
    )
}

export default Devices;