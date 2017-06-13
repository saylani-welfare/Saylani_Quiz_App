
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import MakeMCQsMiddlware from '../../middlewares/adminMiddlewares/makeMCQsMiddleware'


export default class MakeMCQS extends React.Component {


    // inputBoxValue(eve) {
    //     var val = eve.target.value;
    //     this.setState({
    //         quizVal: val
    //     })
    // }

    // componentWillMount() {
    //     var allCourses = [];
    //     axios.get('http://localhost:3050/api/getAllCourses')
    //         .then(function (response) {
    //             allCourses = response.data
    //         })
    //         .then(() => {
    //             this.setState({
    //                 availableCourses: allCourses
    //             })
    //         })
    // }

    // handleChange1 = (event, index, value1) => this.setState({ value1 });

    // handleChange(eve) {
    //     var val = eve.target.value
    //     this.setState({
    //         Optvalue: val
    //     })
    // }

    // handleQuestionChange(eve) {
    //     var val = eve.target.value;
    //     this.setState({
    //         questionBoxValue: val
    //     })
    // }

    // handleCheckboxChange(eve) {

    //     // console.log(eve.target.checked);

    //     if (eve.target.checked === true) {
    //         this.state.AnsArray.push(eve.target.value)
    //         // console.log(this.state.AnsArray);
    //     }

    //     if (eve.target.checked === false) {
    //         var pos = this.state.AnsArray.indexOf(eve.target.value);
    //         this.state.AnsArray.splice(pos, 1)
    //         // console.log(this.state.AnsArray);
    //     }
    // }

    // addOpt() {

    //     this.state.OptsArray.push(this.state.Optvalue)
    //     this.state.Optvalue = ''
    //     this.forceUpdate();
    // }

    // removeOpt(index) {

    //     this.state.OptsArray.splice(index, 1);
    //     this.forceUpdate();
    // }

    // Next() {

    //     if (this.props.QUIZ.quiz === '' || this.props.QUIZ.course_name === '') {
    //         alert("Add quiz first")
    //     }
    //     else {
    //         this.props.saveThisQuestion({ question: this.state.questionBoxValue, options: this.state.OptsArray, answers: this.state.AnsArray });
    //         this.setState({
    //             questionBoxValue: '',
    //             OptsArray: [],
    //             AnsArray: []
    //         })
    //     }

    //     console.log(this.props.QUIZ);
    // }

    // Finish() {
    //     axios.post('http://localhost:3050/api/makeQuiz', this.props.QUIZ)
    //         .then(function (response) {
    //             console.log(response.data)
    //         })
    //         .then(() => {
    //             this.props.clear();
    //         })
    // }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">

                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Make MCQ'S</a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">

                                        <div className="container bootstrap snippet">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="widget-five mb30">
                                                        <textarea rows="5" onChange={this.props.changeHandler} value={this.props.typedQuestion} className="form-control resize-v post-area" placeholder="Enter a Question here...."></textarea>
                                                        <br />
                                                        <div className="todo-item panel panel-default todo-complete">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <span role="button" data-toggle="collapse-disabled" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="clickable">
                                                                        <span className="todo-title">
                                                                            <input value={this.props.typedOption} onChange={this.props.changeHandler1} placeholder='Write Option' style={{ width: '100%' }} id="todo-item-0" />
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <ul className="post-tools list-unstyled clearfix">

                                                            <li className="pull-right">
                                                                <button onClick={this.props.clickHandler} style={{ backgroundColor: "grey" }} className="btn btn-primary btn-round">Add Option</button>
                                                            </li>
                                                        </ul>
                                                        <table className="table">
                                                            <tbody>

                                                                {this.props.listOfOptions.map((OptText, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <input value={OptText} onClick={this.props.checkBoxHandler} type="checkbox" name="optionsCheckboxes" />
                                                                            </td>
                                                                            <td style={{ width: '100%' }} >{OptText}</td>
                                                                            <td className="td-actions text-right">
                                                                                <button onClick={this.props.clickHandler1.bind(this, index)} type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                                    <i className="material-icons">close</i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })}

                                                            </tbody>
                                                        </table>

                                                        <button style={{ backgroundColor: "Green" }} onClick={this.props.clickHandler2} className="btn btn-primary">Next</button>
                                                        <button onClick={this.props.clickHandler3} style={{ float: 'right', marginRight: '8px' }} className="btn btn-primary">Finish</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
