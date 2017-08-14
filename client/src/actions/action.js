import axios from 'axios'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}
export function userInfo(userInfo) {
    axios.post('/api/register', {
        email: userInfo.email,
        password: userInfo.password,
        zipcode: userInfo.zipcode
    })
    .then(r => {
        console.log(r)
        return (dispatch) => {
            dispatch({"type":"USER_SUCCESS"})
        }
    })
    .catch(e => {
        console.log(e) 
        return (dispatch) => {
            dispatch({"type":"USER_ERROR"})
        }
    })
}

export function USER_ERROR() {
    return {
        type: "USER_ERROR"
    }
}

export function USER_SUCCESS() {
    return {
        type: "USER_SUCCESS"
    }
}