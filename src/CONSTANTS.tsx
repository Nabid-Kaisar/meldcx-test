import NotifyRequestBody from "./models/notifyRequestBody";

const baseUrl = "http://35.201.2.209:8000/";
const pollingInterval = 5000;
const authTokenNameOfCookie = "authTokenM";

const myNotificationReq: NotifyRequestBody = {
    name: "Nabid Kaisar",
    email: "himelkaisar023@gmail.com",
    repoUrl: "https://github.com/Nabid-Kaisar/meldcx-test",
    message: "Hey, I have completed the test. Please look into it!"
}

const CONSTANTS = {
    baseUrl, pollingInterval, authTokenNameOfCookie, myNotificationReq
}

export default CONSTANTS;