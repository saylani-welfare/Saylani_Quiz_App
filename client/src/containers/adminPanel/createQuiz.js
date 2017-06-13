
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Link } from 'react-router';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import axios from 'axios';
import Logout from './logout';
import AddQuiz from '../../components/adminPanel/addQuiz.js';
import MakeMCQS from '../../components/adminPanel/makeMCQs.js';
import { browserHistory } from 'react-router';
import MakeMCQsMiddlware from '../../middlewares/adminMiddlewares/makeMCQsMiddleware'
import AsyncMiddlware from '../../middlewares/adminMiddlewares/asyncMiddleware'


function mapStateToProps(state) {
    return {
        QUIZ: state.MakeMCQsReducer,
        saveThisQuestion: (quesOBJ) => { Store.dispatch(MakeMCQsMiddlware.saveMCQ(quesOBJ)) },
        courseList: state.AsyncReducer.CourseList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveQuizTitle: (quizTitle, selectedCourse) => { Store.dispatch(MakeMCQsMiddlware.saveQuizName(quizTitle, selectedCourse)) },
        getAllCourses: () => { Store.dispatch(AsyncMiddlware.getAllCourses()) },
        finish: (QUIZ) => { Store.dispatch(AsyncMiddlware.finish(QUIZ)) }

    }
}

class CreateQuizComp extends React.Component {

    constructor(props) {
        super(props)

        this.checked = false

        this.state = {
            quizVal: '',
            availableCourses: [],
            value1: '',
            questionBoxValue: '',
            Optvalue: '',
            OptsArray: [],
            AnsArray: []
        }
    }

    // Functionalites of addQuize

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            quizVal: val
        })
    }

    componentWillMount() {
        this.props.getAllCourses();
    }

    makeQuizTitle() {

        this.props.saveQuizTitle(this.state.quizVal, this.state.value1)
        this.setState({
            quizVal: '',
            value1: ''
        })
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });


    // Functionalites of makeMCQ's

    // handleChange1 = (event, index, value1) => this.setState({ value1 });

    handleChange(eve) {
        var val = eve.target.value
        this.setState({
            Optvalue: val
        })
    }

    handleQuestionChange(eve) {
        var val = eve.target.value;
        this.setState({
            questionBoxValue: val
        })
    }

    handleCheckboxChange(eve) {

        // console.log(eve.target.checked);

        if (eve.target.checked === true) {
            this.state.AnsArray.push(eve.target.value)
            // console.log(this.state.AnsArray);
        }

        if (eve.target.checked === false) {
            var pos = this.state.AnsArray.indexOf(eve.target.value);
            this.state.AnsArray.splice(pos, 1)
            // console.log(this.state.AnsArray);
        }
    }

    addOpt() {

        this.state.OptsArray.push(this.state.Optvalue)
        this.state.Optvalue = ''
        this.forceUpdate();
    }

    removeOpt(index) {

        this.state.OptsArray.splice(index, 1);
        this.forceUpdate();
    }

    Next() {

        if (this.props.QUIZ.quiz === '' || this.props.QUIZ.course_name === '') {
            alert("Add quiz first")
        }
        else {
            this.props.saveThisQuestion({ question: this.state.questionBoxValue, options: this.state.OptsArray, answers: this.state.AnsArray });
            this.setState({
                questionBoxValue: '',
                OptsArray: [],
                AnsArray: []
            })
        }

        console.log(this.props.QUIZ);
    }

    Finish() {
        if (this.props.QUIZ.mcqs.length !== 0) {
            this.props.finish(this.props.QUIZ);
        }
        else {
            alert('There must be some Questions');
        }


    }

    render() {

        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (
            <div className="main-panel">

                <nav className="navbar navbar-transparent navbar-absolute">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Create Quiz</a>
                        </div>

                        <Logout />

                    </div>
                </nav>

                <div className="content">
                    <div className="container-fluid">

                        <AddQuiz clickHandler={this.makeQuizTitle.bind(this)} listOfCourse={this.props.courseList} pickedCourse={this.state.value1} changeHandler1={this.handleChange1} quizName={this.state.quizVal} changeHandler={this.inputBoxValue.bind(this)} />
                        <MakeMCQS clickHandler3={this.Finish.bind(this)} clickHandler2={this.Next.bind(this)} clickHandler1={this.removeOpt.bind(this)} checkBoxHandler={this.handleCheckboxChange.bind(this)} listOfOptions={this.state.OptsArray} clickHandler={this.addOpt.bind(this)} typedOption={this.state.Optvalue} changeHandler1={this.handleChange.bind(this)} typedQuestion={this.state.questionBoxValue} changeHandler={this.handleQuestionChange.bind(this)} />

                    </div>
                </div>
            </div>
        );
    }
}

export const CreateQuiz = connect(mapStateToProps, mapDispatchToProps)(CreateQuizComp)