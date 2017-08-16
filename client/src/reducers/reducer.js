export function reducer(
    state = {
        fbkey: '',
        userSuccess: null,
    }, action) {


    switch (action.type) {
          case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
            }
          }
         
        case "USER_SUCCESS" : {
            return {
                ...state, 
                userSuccess: true
            }
        }
        case "USER_ERROR" : {
            return { 
                ...state,
                userSuccess: false
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}