import ActionBundle from '../actions/actionbundle.js';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';


export default class coursesMiddleware {

    static setMyData(StdData) {
        return (dispatch) => {

            // console.log(StdData);
            browserHistory.push('./courses');
            dispatch(ActionBundle.STUDENT_INTIAL_DATA(StdData))

        }
    }

    static setMyDataWithCourse(studentCourse) {
        return (dispatch) => {

            dispatch(ActionBundle.STUDENT_MODIFIED_DATA(studentCourse))
        }
    }

    static sendMyDataToDB(newStd) {
        return (dispatch) => {
            
            firebase.database().ref('/ExcelSheet/'+ newStd.Batch + '/' + newStd.Course).push(newStd);

            // console.log(newStd);

            // dispatch(ActionBundle.STUDENT_MODIFIED_DATA(studentCourse))
        }
    }
}