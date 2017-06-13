import ActionBundle from '../../actions/actionbundle.js';
import Store from '../../store/store.js';
import axios from 'axios';

export default class AsyncMiddlware {

    static addProgram(programName) {
        return (dispatch) => {

            axios.post('http://localhost:3050/api/addProgram', { program: programName })
                .then(function (response) {
                    console.log(response.data)
                })
                .then(() => {
                    window.location.assign('/admin/createProgram');
                })
        }
    }

    static getAllPrograms() {
        return (dispatch) => {

            var allPrograms = [];
            axios.get('http://localhost:3050/api/getAllPrograms')
                .then(function (response) {
                    allPrograms = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.allProgramList(allPrograms))
                })
        }
    }

    static deleteProgram(Pid) {
        return (dispatch) => {

            axios.delete('http://localhost:3050/api/deleteProgram/' + Pid)
                .then(function (response) {
                    console.log('deleted')
                })
                .then(() => {
                    window.location.assign('/admin/createProgram');
                })
                .catch(() => {
                    alert('Failed To Delete');
                })
        }
    }

    static getParticlarBatches(Pname) {
        return (dispatch) => {

            var Batches = [];
            var config = {
                headers: { program_name: Pname }
            }

            axios.get('http://localhost:3050/api/getSpecificBatches', config)
                .then(function (response) {
                    response.data.map((Obj) => {
                        Batches.push(Obj.batch)
                    })
                })
                .then(() => {
                    Store.dispatch(ActionBundle.particlarBatches(Batches))
                })
        }
    }

    static addCourse(course, batch, program) {
        return (dispatch) => {

            axios.post('http://localhost:3050/api/addCourse', { course: course, batch_name: batch, program_name: program })
                .then(function (response) {
                    console.log({ success: true })
                })
                .then(() => {
                    window.location.assign('/admin/createCourse');
                })
        }
    }

    static getAllCourses() {
        return (dispatch) => {

            var allCourses = [];
            axios.get('http://localhost:3050/api/getAllCourses')
                .then(function (response) {
                    allCourses = response.data
                })
                .then(() => {
                    Store.dispatch(ActionBundle.allCoursesList(allCourses))
                })
        }
    }

    static deleteCourse(Cid) {
        return () => {

            axios.delete('http://localhost:3050/api/deleteCourse/' + Cid)
                .then(function (response) {
                    console.log('deleted')
                })
                .then(() => {
                    window.location.assign('/admin/createCourse');

                })
                .catch(() => {
                    alert('Failed To Delete');
                })
        }
    }

    static finish(QUIZ) {
        return (dispatch) => {

            axios.post('http://localhost:3050/api/makeQuiz', QUIZ)
                .then(function (response) {
                    console.log(response.data)
                })
                .then(() => {
                    Store.dispatch({ type: 'CLEARMCQS' })
                })

        }
    }

}








