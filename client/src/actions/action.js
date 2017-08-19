import axios from 'axios'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}
export function userInfo(userInfo) {
    return {
        type: "USERINFO",
        payload: userInfo
    }
}