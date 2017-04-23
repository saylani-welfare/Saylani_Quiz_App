
import React from 'react';
import './style.css';
import coursesMiddleware from '../middlewares/coursesMiddleware.js';
import { Store } from '../store/store.js'
import { connect } from 'react-redux';

// function mapStateToProp(state) {
//     return {

//     }
// }

function mapDispatchToProp(dispatch) {
    return {
        studentSayllaniData: (StdData) => { Store.dispatch(coursesMiddleware.setMyData(StdData)) }
    }
}

export class StudentFormComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            studentName: '',
            studentEmail: '',
            studentID: '',
            studentBatch: ''
        }
    }

    HisName(e) {
        this.setState({
            studentName: e.target.value
        })
    }

    HisEmail(e) {
        this.setState({
            studentEmail: e.target.value
        })
    }

    HisID(e) {
        this.setState({
            studentID: e.target.value
        })
    }

    HisBatch(e) {
        this.setState({
            studentBatch: e.target.value
        })
    }

    emailValidtion() {

        var validationOne = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var validationTwo = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

        var x = this.state.studentEmail;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");

        if (!validationOne.test(this.state.studentEmail) && !validationTwo.test(this.state.studentEmail) && (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)) {
            return false
        }
        else {
            return true
        }
    }

    pushMeToCourses() {

        if (this.state.studentName !== '' && this.state.studentEmail !== '' && this.state.studentID !== '' && this.state.studentBatch !== '') {

            if (!isNaN(this.state.studentID) && this.emailValidtion()) {
                this.props.studentSayllaniData(this.state);
            }
            else {
                alert('typed error');
            }
        }
        else {
            alert('Something invalid');
        }
    }

    render() {
        return (

            <div className="container">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h1 className="title">Quiz Form</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal">

                            <div className="form-group">
                                <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input onChange={this.HisName.bind(this)} type="text" className="form-control" name="name" id="name" placeholder="Enter your Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input onChange={this.HisEmail.bind(this)} type='email' className="form-control" name="email" id="email" placeholder="Enter your Email" />
                                    </div>
                                </div>
                            </div>

                            {/*<div className="form-group">
                                <label htmlFor="email" className="cols-sm-2 control-label">Your Batch</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>
                                        <input onChange={this.HisEmail.bind(this)} type='email' className="form-control" name="email" id="email" placeholder="Enter your Batch" />

                                    </div>
                                </div>
                            </div>*/}
                            <div className="form-group">
                                <label htmlFor="username" className="cols-sm-2 control-label">Saylani ID</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input onChange={this.HisID.bind(this)} type="text" className="form-control" name="username" id="username" placeholder="Enter your ID" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="cols-sm-2 control-label">Your Batch</label>
                                <select className="form-control form-control-selectpicker" onClick={this.HisBatch.bind(this)}>
                                    <option value="0">Select Your batch</option>
                                    <option value="Batch 1">Batch 1</option>
                                    <option value="Batch 2">Batch 2</option>
                                    <option value="Batch 3">Batch 3</option>
                                    <option value="Batch 4">Batch 4</option>
                                    <option value="Batch 5">Batch 5</option>
                                    <option value="Batch 6">Batch 6</option>
                                </select>
                            </div>

                            {/*<div className="form-group">
							<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>*/}

                            <div className="form-group ">
                                <button onClick={this.pushMeToCourses.bind(this)} type="button" className="btn btn-primary btn-lg btn-block login-button">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export const StudentForm = connect(null, mapDispatchToProp)(StudentFormComp);