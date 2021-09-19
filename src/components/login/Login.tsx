import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import "./Login.css";
import Input from "../genericComponents/input/Input";
import Button from "../genericComponents/button/Button";
import loginApi from "../../apiHandlers/loginApi";
import LoginReqBody from "../../models/loginReqBody";
import util from "../../util";
import CONSTANTS from "../../CONSTANTS";

const inputStyle = {
    backgroundColor: "#ECEFF1",
    borderColor: "#FFFFFF",
    fontSize: "1.7rem"
}

const btnStyle = {
    fontSize: "1.8rem",
    lineHeight: "3.5rem",
    fontWeight: "bold"
}

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const history = useHistory();

    const login = (): void => {
        if (!email || !password) {
            setErrorMsg("Email or Password field can not be empty!");
            return;
        }
        const loginReq: LoginReqBody = {
            email,
            password
        }
        loginApi.doLogin(loginReq)
            .then((res) => {
                //set cookie
                util.setCookies(CONSTANTS.authTokenNameOfCookie, res.data);
                //navigate
                history.push("/devices");
            }).catch(err => {
            if (err.response && err.response.data) {
                setErrorMsg(err.response.data);
            } else {
                setErrorMsg(err.toString());
            }
        })
    }


    return (
        <div className={"background centerFlex"}>
            <div className={"card card-size"}>
                <div className={"card-body"} style={{padding: "8%"}}>
                    <h1 className={"text-center mt-lg-5 display-4"}>
                        Login
                    </h1>
                    <Input placeholder={"Email Address"} setData={setEmail} iconName={"glyphicon glyphicon-envelope"}
                           class={"input-style"} style={inputStyle}/>
                    <Input placeholder={"Password"} setData={setPassword} iconName={"glyphicon glyphicon-cog"}
                           class={"input-style"} style={inputStyle}/>
                    {errorMsg && <div className="alert-danger mt-4">{errorMsg}</div>}
                    <div className={"btn-container centerFlex"}>
                        <Button onClickCb={login} class={"btn btn-primary btn-lg btn-style"} styles={btnStyle}
                                label={"LOG IN"}
                        ></Button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Login;