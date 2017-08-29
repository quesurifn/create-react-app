export function reducer(
    state = {
        fbkey: '',
        userinfo: {}, 
        planinfo: '',
        checkoutinfo: {},
        cart: [],
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
        case "ADDTOCART": {
            let payload;
            let cartCpy = [...state.cart]
            //find if it exists
            const index = cartCpy.findIndex((e) => e.name === action.payload.name)

            if (index !== -1) {
                cartCpy[index].q++
                return {
                    cart: cartCpy
                } 
            } else {
                return {
                    cart: [...state.cart, action.payload]
                }
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}