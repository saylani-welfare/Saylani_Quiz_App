
const INITIAL_STATE = {
    Name: '',
    Email: '',
    ID: '',
    Course: ''
}

export default function Student(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'STUDENT_INTIAL_DATA':
            return Object.assign({}, state, { Name: action.studentOBJ.studentName, Email: action.studentOBJ.studentEmail, ID: action.studentOBJ.studentID});

        case 'STUDENT_MODIFIED_DATA':
            return Object.assign({}, state, { Course: action.course});

        default:
            return state
    }
}