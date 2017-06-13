

export default class ActionBundle {

    static adminToken(tok) {
        return {
            type: 'ADMINTOKEN',
            authenticationTOKEN: tok
        }
    }

    static clearToken() {
        return {
            type: 'CLEARTOKEN',
            delTOKEN: ''
        }
    }

    static question(questOBJ) {
        return {
            type: 'QUESTION',
            Question: questOBJ
        }
    }

    static svQuizName(quizTitle, selectedCourse) {
        return {
            type: 'SVQUIZNAME',
            title: quizTitle,
            course: selectedCourse
        }
    }

    static allProgramList(ls) {
        return {
            type: 'ALLPROGRAMLIST',
            Plist: ls
        }
    }

    static particlarBatches(ls) {
        return {
            type: 'PARTICLARBATCHES',
            PBlist: ls
        }
    }

    static allCoursesList(ls){
        return {
            type: 'ALLCOURSESLIST',
            Clist: ls
        }
    }
}







