import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase'

export default class AdminSignInMiddleware {

    static getAdminsData(currentInput) {
        return (dispatch) => {

            firebase.auth().signInWithEmailAndPassword(currentInput.adminEmail, currentInput.adminPass).then(() => {
                console.log('succesfull');
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}