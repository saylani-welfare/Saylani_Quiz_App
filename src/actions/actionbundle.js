

export default class ActionBundle {

    static USER_LOGGED_IN(payload){
        return {
            type: 'USER_LOGGED_IN',
            payload
        }
    }

     static USER_LOGIN_FAILED(){
        return {
            type: 'USER_LOGIN_FAILED'
        }
    }
    static USER_Logut(payload){
        return {
            type: 'USER_LOGOUT',
            payload
        }
    }
     static USER_LOGOUT_FAILED(payload){
        return {
            type: 'USER_LOGIN_FAILED',
            payload
        }
    }
    static USER_LOGIN_GOOGLE(payload){
        return {
            type: 'USER_LOGIN_GOOGLE',
            payload
        }
    }
    static USER_LOGIN_GOOGLE_FAILED(payload){
        return {
            type: 'USER_LOGIN_GOOGLE_FAILED',
            payload
        }
    }

    static STUDENT_INTIAL_DATA(StdData){
        return {
            type: 'STUDENT_INTIAL_DATA',
            studentOBJ: StdData
        }
    }

    static STUDENT_MODIFIED_DATA(studentCourse){
        return {
            type: 'STUDENT_MODIFIED_DATA',
            course: studentCourse
        }
    }

    static ADMIN_VERIFICATION(adminBoxEmail, adminBoxPass){
        return {
            type: 'ADMIN_VERIFICATION',
            adminEmail: adminBoxEmail,
            adminPass: adminBoxPass

        }
    }

    static All_COURSES(list){
        return {
            type: 'All_COURSES',
            listQuizCourse: list 
        }
    }

}