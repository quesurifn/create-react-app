import axios from 'axios'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}
export function setTwitterUsername(username) {
    return {
        type: "TWITTERNAME",
        payload: username
    }
}
export function refresh() {
    return {
        type: "REFRESH"
    }
}