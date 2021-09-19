import React, {useState} from "react";
import "./Orbit.css";

interface props {
    deviceCount: number;
}

function Orbit(props: props) {

    const getDivs = () => {
        let {deviceCount} = props;
        if (deviceCount === 0) {
            return null;
        }

        let circleArr = [];
        let rotatingAngle = 360/deviceCount;

        for (let i = 0; i < deviceCount; i++) {
            if (i === 0) {
                circleArr.push(<div className={"circle"} key={i}
                                    style={{transform: `translateX(250px)`}}></div>);
            } else {
                let angle = rotatingAngle * i;
                circleArr.push(<div className={"circle"} key={i}
                                    style={{transform: `rotate(${angle}deg) translateX(250px)`}}></div>);
            }
        }
        return circleArr;
    }

    return (
        <React.Fragment>
            <div className={"main centerFlex centerScreen fl-column"}>
                <div>
                    {getDivs()}
                    <div className={""}>
                        <div className={"bigNum"}>{props.deviceCount}</div>
                        <div className={"text-white smallText"}>DEVICES</div>
                        <div className={"text-white smallText"}>ONLINE</div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Orbit;