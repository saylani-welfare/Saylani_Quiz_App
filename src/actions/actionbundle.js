

export default class ActionBundle {

    static USER_LOGGED_IN(payload){
        return {
            type: 'USER_LOGGED_IN',
            payload
        }
    }

     static USER_LOGIN_FAILED(){
        return {
            type: 'USER_LOGIN_FAILED'
        }
    }
    static USER_Logut(payload){
        return {
            type: 'USER_LOGOUT',
            payload
        }
    }
     static USER_LOGOUT_FAILED(payload){
        return {
            type: 'USER_LOGIN_FAILED',
            payload
        }
    }
    static USER_LOGIN_GOOGLE(payload){
        return {
            type: 'USER_LOGIN_GOOGLE',
            payload
        }
    }
    static USER_LOGIN_GOOGLE_FAILED(payload){
        return {
            type: 'USER_LOGIN_GOOGLE_FAILED',
            payload
        }
    }

}