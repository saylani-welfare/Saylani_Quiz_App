
const INITIAL_STATE = {
    administratorEmail: '',
    administratorPass: ''
}

export default function VerifyAdmin(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'ADMIN_VERIFICATION':
        // console.log(action.adminEmail, action.adminPass);
            return Object.assign({}, state, { administratorEmail: action.adminEmail, administratorPass: action.adminPass });

        default:
            return state
    }
}