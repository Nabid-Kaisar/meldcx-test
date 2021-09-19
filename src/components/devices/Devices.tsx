import React, {useState, useEffect} from "react";
import devicesApi from "../../apiHandlers/devicesApi";
import CONSTANTS from "../../CONSTANTS";
import util from "../../util";
import "./Devices.css";
import Button from "../genericComponents/button/Button";
import {useHistory} from "react-router-dom";

const logoutBtnStyle = {
    backgroundColor: "#545b62",
    borderColor: "#545b62",
    fontSize: "1.9rem",
    lineHeight: "3.5rem",
    fontWeight: "bolder",
    width: "10%",
    padding: "5px",
    borderRadius: "5px",
    display: "inline-block",
    textAlign: "center",
    minWidth: "fit-content"
}

const notifyBtnStyle = {
    ...logoutBtnStyle,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    marginRight: "10px"
}

function Devices() {
    const [devicesList, setDevicesList] = useState([]);
    const history = useHistory();

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

    const handleOnClickLogout = (): void => {
        util.removeCookies(CONSTANTS.authTokenNameOfCookie);
        history.push("/login");
    }

    const handleNotify = (): void => {

    }

    return (
        <div className={"dev-bg"}>
            <div className={"centerFlex centerScreen fl-column"}>
                <div className={"bigNum"}>{devicesList.length}</div>
                <div className={"text-white smallText"}>DEVICES</div>
                <div className={"text-white smallText"}>ONLINE</div>
            </div>
            <div className={"footer-bg fixed-bottom centerFlex"}>
                <Button onClickCb={handleNotify} label={"NOTIFY"} class={"btn btn-light"}
                        styles={notifyBtnStyle}/>
                <Button onClickCb={handleOnClickLogout} label={"LOG OUT"} class={"btn btn-secondary"}
                        styles={logoutBtnStyle}/>
            </div>
        </div>
    )
}

export default Devices;