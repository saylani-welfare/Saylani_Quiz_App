import ActionBundle from '../../actions/actionbundle.js';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router';

export default class createCourseMiddleware {

    static createACourse(course) {
        return (dispatch) => {
            var foundBool = true;
            var refer = firebase.database().ref('/CoursesList')
            refer.on('value', (snap) => {

                snap.forEach((snapOne) => {

                    if (course.toUpperCase() === snapOne.val()) {
                        foundBool = false
                        console.log(foundBool);
                    }
                })

                if (foundBool == true) {
                    // console.log('it is not found');
                    

                    var arrayOfCourse = [];
                    firebase.database().ref('/CoursesList').on('value', (snap) => {
                        arrayOfCourse = [];
                        snap.forEach((snapOne) => {
                            // snapOne.val()
                            arrayOfCourse.push(snapOne.val());
                        })
                        // console.log(arrayOfCourse)
                        dispatch(ActionBundle.All_COURSES(arrayOfCourse));
                    })
                }
            })
        }
    }

    static fetchMeCourse() {
        return (dispatch) => {
            var arrayOfCourse = [];

            firebase.database().ref('/CoursesList').on('value', (snap) => {
                arrayOfCourse = [];
                snap.forEach((snapOne) => {
                    // snapOne.val()
                    arrayOfCourse.push(snapOne.val());
                })
                // console.log(arrayOfCourse)
                dispatch(ActionBundle.All_COURSES(arrayOfCourse));
            })
        }
    }

    static deleteCourse(clickedCourse) {
        return (dispatch) => {

            firebase.database().ref('/CoursesList').on('value', (snap) => {
                snap.forEach((snapOne) => {
                    if (snapOne.val() === clickedCourse) {
                        firebase.database().ref('/CoursesList/' + snapOne.key).remove();
                    }
                })
            });
        }
    }
}