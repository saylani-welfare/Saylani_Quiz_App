import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import MakeMCQsMiddlware from '../../middlewares/adminMiddlewares/makeMCQsMiddleware'


function mapStateToProps(state) {
    return {
        QUIZ: state.MakeMCQsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveQuizTitle: (quizTitle, selectedCourse) => { Store.dispatch(MakeMCQsMiddlware.saveQuizName(quizTitle, selectedCourse)) }
    }
}

class AddQuiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            quizVal: '',
            availableCourses: [],
            value1: ''
        }
    }

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            quizVal: val
        })
    }

    componentWillMount() {
        var allCourses = [];
        axios.get('http://localhost:3050/api/getAllCourses')
            .then(function (response) {
                allCourses = response.data
            })
            .then(() => {
                this.setState({
                    availableCourses: allCourses
                })
            })
    }

    makeQuizTitle() {

        this.props.saveQuizTitle(this.state.quizVal, this.state.value1)
        console.log(this.props.QUIZ);
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Quiz Title</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" onChange={this.inputBoxValue.bind(this)} value={this.state.quizVal} placeholder="Quiz Title" />
                                    </div>
                                </div>
                            </div>

                            <label style={{ position: 'relative', bottom: '25px', paddingLeft: '20px' }}>Courses</label>
                            <DropDownMenu value={this.state.value1} onChange={this.handleChange1} style={{ width: '150px' }}>
                                {
                                    this.state.availableCourses.map((Cname, index) => {
                                        return (
                                            <MenuItem key={index} value={Cname.course} primaryText={Cname.course} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <button style={{ backgroundColor: "Green" }} onClick={this.makeQuizTitle.bind(this)} className="btn btn-primary">Make Title</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddQuiz);
