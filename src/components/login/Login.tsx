import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import "./Login.css";
import Input from "../genericComponents/input/Input";
import Button from "../genericComponents/button/Button";
import loginApi from "../../apiHandlers/loginApi";
import LoginReqBody from "../../models/loginReqBody";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const login = (): void => {
        const loginReq: LoginReqBody = {
            email,
            password
        }
        loginApi.doLogin(loginReq)
            .then((res) => {
                console.log(res);
                history.push("/devices");
            }).catch(err => {
            alert(err);
        })
    }

    const inputStyle = {
        backgroundColor: "#ECEFF1",
        borderColor: "#FFFFFF"
    }
    return (
        <div className={"background centerFlex"}>
            <div className={"card card-size"}>
                <div className={"card-body"} style={{padding: "8%"}}>
                    <div className={"card-title text-center h1 mt-lg-5"}>
                        Login
                    </div>
                    <Input placeholder={"Email Address"} setData={setEmail} iconName={"glyphicon glyphicon-envelope"}
                           class={"input-style"} style={inputStyle}/>
                    <Input placeholder={"Password"} setData={setPassword} iconName={"glyphicon glyphicon-cog"}
                           class={"input-style"} style={inputStyle}/>
                    <div className={"btn-container centerFlex"}>
                        <Button onClickCb={login} class={"btn btn-primary btn-lg"} label={"LOG IN"}></Button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Login;