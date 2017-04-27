
const INITIAL_STATE = {
    allcourseList: []
}

export default function CoursesReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'All_COURSES':
            // console.log(action.listQuizCourse);
            return Object.assign({}, state, {allcourseList: action.listQuizCourse})
           

        default:
            return state
    }
}