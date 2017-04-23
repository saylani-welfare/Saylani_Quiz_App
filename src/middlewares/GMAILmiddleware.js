import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router';

export default class GMAILmiddleware {

    static googleLogin() {
        return (dispatch) => {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
            });

            firebase.auth().signInWithPopup(provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                console.log(token)
                // The signed-in user info.
                var user = result.user;
                // ...
                dispatch(ActionBundle.USER_LOGIN_GOOGLE(user))
                browserHistory.push('./studentform');
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode)
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                console.log(email)
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(credential)
                // ...
                dispatch(ActionBundle.USER_LOGIN_GOOGLE_FAILED(errorMessage))
            });
        }
    }

    // static fblogout() {
    //     return dispatch => {
    //         firebase.auth().signOut().then(function () {
    //             // Sign-out successful.
    //             dispatch(ActionBundle.USER_Logut("logout success"))
    //         }).catch(function (error) {
    //             // An error happened.
    //             dispatch(ActionBundle.USER_LOGOUT_FAILED(error))

    //         });
    //     }
    // }

}