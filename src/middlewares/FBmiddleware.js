import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase'
export default class FBmiddleware {

    static facebookLogin() {
        return (dispatch) => {
            console.log('Middleware ready');
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.setCustomParameters({
                'display': 'popup'
            });
            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                //firebase retrieving
                dispatch(ActionBundle.USER_LOGGED_IN(user));
                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                dispatch(ActionBundle.USER_LOGIN_FAILED(errorMessage));
            });
        }
    }
    
    static fblogout() {
        return dispatch => {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                dispatch(ActionBundle.USER_Logut("logout success"))
            }).catch(function (error) {
                // An error happened.
                dispatch(ActionBundle.USER_LOGOUT_FAILED(error))

            });
        }
    }

    static googleLogin() {
       return (dispatch) => {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
            });

            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                dispatch(ActionBundle.USER_LOGIN_GOOGLE(user))
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                 dispatch(ActionBundle.USER_LOGIN_GOOGLE_FAILED(errorMessage))
            });
        }
    }

}