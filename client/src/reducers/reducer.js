export function reducer(
    state = {
        fbkey: '',
        userinfo: {}
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

        default: {
            return {
                ...state
            }
        }
    }
}