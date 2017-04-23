import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router';

export default class AdminSignInMiddlware {

    static getAdminsData(currentInput) {
        return (dispatch) => {

            firebase.auth().signInWithEmailAndPassword(currentInput.adminEmail, currentInput.adminPass).then(() => {
                // console.log('succesfull');
                dispatch(ActionBundle.ADMIN_VERIFICATION(currentInput.adminEmail, currentInput.adminPass))
                browserHistory.push('/admin/dashboard');
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    static verifyThisCurrentAdmin(hisEmail, hisPass){
        return (dispatch)=>{
            console.log(hisEmail, hisPass)
            if(hisEmail === '' && hisPass === ''){
                 browserHistory.push('/admin');
            }
        }
    }

}