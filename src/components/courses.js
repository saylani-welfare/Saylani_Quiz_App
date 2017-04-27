import React from 'react';
import './style.css';
import { Store } from '../store/store.js'
import { connect } from 'react-redux';
import coursesMiddleware from '../middlewares/coursesMiddleware.js';
import createCourseMiddleware from '../middlewares/adminMiddlewares/createCourseMiddleware.js'


function mapStateToProp(state) {
    return {
        aNewStudent: state.Student,
        listOfAvailableCourse: state.CoursesReducer.allcourseList
    }
}

function mapDispatchToProp(dispatch) {
    return {
        studentSayllaniData: (studentCourse) => { Store.dispatch(coursesMiddleware.setMyDataWithCourse(studentCourse)) },
        sendingToFirebase: (newStd) => { Store.dispatch(coursesMiddleware.sendMyDataToDB(newStd)) },
        fetchCourse: () => { Store.dispatch(createCourseMiddleware.fetchMeCourse()) },
    }
}

export class CoursesComp extends React.Component {

    constructor(props) {
        super(props)

        this.props.fetchCourse();
    }

    itsMyCourse(v) {

        this.props.studentSayllaniData(v);
    }

    componentDidUpdate() {
        console.log(this.props.aNewStudent);    
        // this.props.sendingToFirebase(this.props.aNewStudent)
    }

    render() {

        return (
            <section className="purpose section">
                <div className="container">
                    <h2 className="title" style={{ marginTop: '-30px', marginBottom: '60px' }}>Courses</h2>

                    <div className="row">
                        {
                            this.props.listOfAvailableCourse.map((info, key) => {
                                return (
                                    <div key={key} className="col-sm-4" onClick={this.itsMyCourse.bind(this, 'GIT')}>
                                        <div className="vira-card">
                                            <div className="vira-card-header">
                                                <div className="card-icon">
                                                    <span className="fa fa-diamond" aria-hidden="true"></span>
                                                </div>
                                            </div>
                                            <div className="vira-card-content">
                                                <h3>{info}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export const Courses = connect(mapStateToProp, mapDispatchToProp)(CoursesComp);