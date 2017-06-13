
const INITAIL_STATE = {
    ProgramList: [],
    ProgramWiseBatches: [],
    CourseList: []
}

export default function AsyncReducer(state = INITAIL_STATE, action) {

    switch (action.type) {

        case 'ALLPROGRAMLIST':
            return Object.assign({}, state, { ProgramList: action.Plist })

        case 'PARTICLARBATCHES':
            return Object.assign({}, state, { ProgramWiseBatches: action.PBlist })

        case 'ALLCOURSESLIST':
            return Object.assign({}, state, { CourseList: action.Clist })

        default: return state
    }
}