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
export function planInfo(planInfo) {
    return {
        type: "PLANINFO",
        payload: planInfo
    }
}
export function checkoutInfo(checkoutInfo) {
    return {
        type: "CHECKOUTINFO",
        payload: checkoutInfo
    }
}
export function addToCart(obj) {
    return {
        type: "ADDTOCART",
        payload: obj
    }
}