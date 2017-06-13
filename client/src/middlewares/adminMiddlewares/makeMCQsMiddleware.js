import ActionBundle from '../../actions/actionbundle.js';
import Store from '../../store/store.js';

export default class MakeMCQsMiddlware {

    static saveMCQ(quesOBJ) {
        return (dispatch) => {
            // console.log(quesOBJ);
            Store.dispatch(ActionBundle.question(quesOBJ))
        }
    }

    static saveQuizName(quizTitle, selectedCourse) {
        return (dispatch) => {
            // console.log(quizTitle, selectedCourse);
            Store.dispatch(ActionBundle.svQuizName(quizTitle, selectedCourse))
        }
    }
}