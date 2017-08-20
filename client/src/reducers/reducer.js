export function reducer(
    state = {
        fbkey: '',
        userinfo: {}, 
        planinfo: '',
        checkoutinfo: {}
    }, action) {


    switch (action.type) {
          case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
            }
          }
        
        case "USERINFO": {
            return {
                ...state, 
                userinfo: action.payload
            }
        }

        case "PLANINFO": {
            return {
                ...state,
                planinfo: action.payload
            }
        }
        case "CHECKOUTINFO": {
            return {
                ...state, 
                checkoutinfo: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}