import React, {useState, useEffect} from "react";
import devicesApi from "../../apiHandlers/devicesApi";
import CONSTANTS from "../../CONSTANTS";
import util from "../../util";
import "./Devices.css";
import Button from "../genericComponents/button/Button";
import {useHistory} from "react-router-dom";
import Orbit from "../orbit/Orbit";
import Loading from "../orbit/Loading";
import NotifyRequestBody from "../../models/notifyRequestBody";

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
    const [showOrbit, setShowOrbit] = useState(false);
    const history = useHistory();

    let setTimeOutRef: NodeJS.Timeout;

    const getDevicesList = () => {
        setShowOrbit(false);
        devicesApi.getDevicesList()
            .then(res => {
                setDevicesList(res.data.devices);
                setTimeOutRef = setTimeout(() => getDevicesList(), CONSTANTS.pollingInterval)
                setShowOrbit(true);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        if (!util.isUserAuthenticated()) {
            alert("You must login first");

            history.push("/login",);
        }

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
        devicesApi.doNotify(CONSTANTS.myNotificationReq).then(res => {
            console.log(res);
        })
            .catch(err => {
                console.error(err);
            })
    }


    return (
        <div className={"dev-bg"}>
            {showOrbit ? <Orbit deviceCount={devicesList.length}/> : <Loading/>}
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