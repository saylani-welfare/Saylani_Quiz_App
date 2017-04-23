
const INITIAL_STATE = {
   isLoggedIn: false,
   user:[]
}

export default function InOutReducer(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'USER_LOGGED_IN': 
            console.log('reducer ready');
            return Object.assign({}, state, { isLoggedIn: true})
        
        case 'USER_LOGIN_FAILED': 
            console.log('reducer ready');
            return Object.assign({}, state, { isLoggedIn: false })

            case 'USER_LOGOUT': 
            console.log('reducer ready');
            return Object.assign({}, state, { isLoggedIn: false})

             case 'USER_LOGIN_GOOGLE': 
            console.log('reducer ready');
            return Object.assign({}, state, { isLoggedIn: true})

            case 'USER_LOGIN_GOOGLE_FAILED': 
            console.log('reducer ready');
            return Object.assign({}, state, { isLoggedIn: false})

        default:
            return state
    }
}