import ActionBundle from '../../actions/actionbundle.js';
import * as firebase from 'firebase'
import { browserHistory } from 'react-router';

export default class createQuizMiddleware {

    static createAQuiz(quizName, courseNameforQuiz , wholeQuestions) {
        return (dispatch) => {

            console.log(quizName, courseNameforQuiz, wholeQuestions)
            firebase.database().ref('/QuizList/' + courseNameforQuiz+ '/' + quizName).push(wholeQuestions);
        }
    }
}