import axios from 'axios'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}
