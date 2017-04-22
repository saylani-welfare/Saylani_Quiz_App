import React from 'react';
import './style.css';
import { Store } from '../store/store.js'
import { connect } from 'react-redux';
import coursesMiddleware from '../middlewares/coursesMiddleware.js';


function mapStateToProp(state) {
    return {
        aNewStudent: state.Student
    }
}

function mapDispatchToProp(dispatch) {
    return {
        studentSayllaniData: (studentCourse) => { Store.dispatch(coursesMiddleware.setMyDataWithCourse(studentCourse)) },
        sendingToFirebase: (newStd) => { Store.dispatch(coursesMiddleware.sendMyDataToDB(newStd)) }
    }
}

export class CoursesComp extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         selectedCourse: ''
    //     }
    // }

    itsMyCourse(v) {

        this.props.studentSayllaniData(v);
    }

    componentDidUpdate() {
        // console.log(this.props.aNewStudent);
        this.props.sendingToFirebase(this.props.aNewStudent)
    }

    render() {

        return (
            <section className="purpose section">
                <div className="container">
                    <h2 className="title">Courses</h2>
                    <div className="row" onClick={this.itsMyCourse.bind(this, 'GIT')}>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-diamond" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>GIT</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>HTML5</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-bicycle" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Typescript</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Angular 2</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Apache Cordova</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Ionic</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Mongo DB</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCNA</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCO</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>CCA</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Graphic Designing</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="vira-card">
                                <div className="vira-card-header">
                                    <div className="card-icon">
                                        <span className="fa fa-cogs" aria-hidden="true"></span>
                                    </div>
                                </div>
                                <div className="vira-card-content">
                                    <h3>Machine Learning</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export const Courses = connect(mapStateToProp, mapDispatchToProp)(CoursesComp);