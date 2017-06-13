
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Link } from 'react-router';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import axios from 'axios';
import Logout from './logout';
import AddCourse from '../../components/adminPanel/addCourse.js';
import AllCourses from '../../components/adminPanel/allCourses.js';
import AsyncMiddlware from '../../middlewares/adminMiddlewares/asyncMiddleware'


function mapStateToProps(state) {
    return {
        programlist: state.AsyncReducer.ProgramList,
        programWiseBatches: state.AsyncReducer.ProgramWiseBatches,
        courseList: state.AsyncReducer.CourseList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
        getParticlarBatches: (Pname) => { Store.dispatch(AsyncMiddlware.getParticlarBatches(Pname)) },
        addCourse: (course, batch, program) => { Store.dispatch(AsyncMiddlware.addCourse(course, batch, program)) },
        getAllCourses: () => { Store.dispatch(AsyncMiddlware.getAllCourses()) },
        deleteCourse: (Cid) => { Store.dispatch(AsyncMiddlware.deleteCourse(Cid)) }
    }
}

class CreateCourseComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            courseVal: '',
            allBatches: [],
            allPrograms: [],
            value1: '',
            value2: ''
        }
    }

    //Functionalites of addCourse

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            courseVal: val
        })
    }

    componentWillMount() {

        this.props.getAllPrograms();
    }

    fetchBatches(Pname) {

        this.props.getParticlarBatches(Pname)

    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });

    addACourse() {

        this.props.addCourse(this.state.courseVal, this.state.value1, this.state.value2)
        this.setState({
            courseVal: '',
            value1: '',
            value2: ''
        })
    }

    //Functionalites of allCourses

    componentDidMount() {

        persistStore(Store, {}, (err, result) => {
            this.props.getAllCourses();
        })


    }

    del(Cid) {
        this.props.deleteCourse(Cid);
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
                            <a className="navbar-brand" href="#">Create Course</a>
                        </div>

                        <Logout />

                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">

                        <AddCourse addcourse={this.addACourse.bind(this)} listOfBatches={this.props.programWiseBatches} DDchangeHandler1={this.handleChange1} batchDD={this.state.value1} clickHandler={this.fetchBatches.bind(this)} listOfPrograms={this.props.programlist} DDchangeHandler2={this.handleChange2} ProgramDD={this.state.value2} courseName={this.state.courseVal} changeHandler={this.inputBoxValue.bind(this)} />
                        <AllCourses clickHandler={this.del.bind(this)} listOfCourses={this.props.courseList} />

                    </div>
                </div>
            </div>
        );
    }
}

export const CreateCourse = connect(mapStateToProps, mapDispatchToProps)(CreateCourseComp)