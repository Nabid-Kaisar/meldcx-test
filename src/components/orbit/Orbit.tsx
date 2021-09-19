import React from "react";
import "./Orbit.css";

interface props {
    deviceCount: number;
}

function Orbit(props: props) {
    const [circles, setCircles] = React.useState([])

    React.useEffect(() => {
        setCircles((prevState: any) => {
            prevState = [...Array(props.deviceCount).keys()]
            return prevState
        })

        return () => {
            setCircles((prevState: any) => {
                prevState = [...Array(props.deviceCount).keys()]
                return prevState
            })
        }
    }, [props.deviceCount])

    const getCircles = () => {
        let {deviceCount} = props;
        if (deviceCount === 0) {
            return null;
        }

        let circleArr = Array<any>();
        let rotatingAngle = 360 / deviceCount;

        circles.map((data, i) => {
            if (i === 0) {
                circleArr.push(<div className={"animate-obj"} key={i}
                ><span style={{transform: `translateX(50px)`}} className={"circle-element"}></span>
                </div>);
            } else {
                let angle = rotatingAngle * i;
                circleArr.push(<div className={"animate-obj"} key={i}
                ><span style={{transform: `rotate(${angle}deg) translateX(50px)`}}
                       className={"circle-element"}></span></div>);
            }
        })
        return circleArr;
    }

    return (
        <React.Fragment>
            <div className={"main centerFlex centerScreen fl-column"}>
                <div>
                    <div className="container-element">
                        {
                            getCircles()
                        }
                    </div>
                    <div>
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