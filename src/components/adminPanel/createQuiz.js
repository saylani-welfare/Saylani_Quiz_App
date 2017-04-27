
import React from 'react';
import './material-dashboard.css';
// import ActionBundle from '../../actions/actionbundle.js';
// import '../assetss/css/demo.css';
// import '../assetss/css/bootstrap.css';
import { Link } from 'react-router';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import createQuizMiddleware from '../../middlewares/adminMiddlewares/createQuizMiddleware.js'

function mapStateToProp(state) {
    return {

    }
}

function mapDispatchToProp(dispatch) {
    return {
        MakeQuiz: (quizName, courseNameforQuiz , wholeQuestions) => { Store.dispatch(createQuizMiddleware.createAQuiz(quizName, courseNameforQuiz , wholeQuestions)) }
    }
}

export class CreateQuizComp extends React.Component {

    constructor(props) {
        super(props)

        this.individualQuestion = []
        this.AllQuestions = []
        this.generateList = []

        this.state = {
            question: '',
            questionOption: '',
            questionAnswer: '',
            titleOfQuiz: '',
            selectedCourse: ''
        }
    }

    quizFormingFinished() {
        // console.log(this.AllQuestions);
        this.props.MakeQuiz(this.state.titleOfQuiz , this.state.selectedCourse ,this.AllQuestions);
    }

    QuizTitle(event) {
        var v = event.target.value;

        this.setState({
            titleOfQuiz: v
        })
    }

    selectedCourseforQuiz(event) {
        var v = event.target.value;

        this.setState({
            selectedCourse: v
        })
    }

    SaveQuestion() {

        this.individualQuestion.push(this.state.questionAnswer);
        this.individualQuestion.push(this.state.question);
        console.log(this.individualQuestion)

        this.AllQuestions.push(this.individualQuestion);

        this.setState({
            question: '',
            questionAnswer: ''
        })
        this.generateList = [];
        this.individualQuestion = [];
    }

    setQuestion(event) {
        var v = event.target.value;

        this.setState({
            question: v
        })
    }

    setOption(event) {
        var v = event.target.value;

        this.setState({
            questionOption: v
        })
    }

    setAnswer(event) {
        var v = event.target.value;

        this.setState({
            questionAnswer: v
        })
    }

    addOption() {

        if (this.state.questionOption !== '') {
            this.individualQuestion.push(this.state.questionOption);

            var htmlforOption = (

                <div className="todo-item panel panel-default todo-complete" style={{ backgroundColor: '#f5f5f5' }}>
                    <div className="panel-heading" style={{ padding: '0px' }}>
                        <ul className="list-group" style={{ marginTop: '5px', marginBottom: '5px' }}>
                            <div>
                                <input type="checkbox" id="checkbox" style={{ marginRight: '5px', marginLeft: '10px' }} value={this.state.questionOption} onClick={this.setAnswer.bind(this)} />
                                <span>
                                    {this.state.questionOption}
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            )

            this.generateList.push(htmlforOption)
            this.forceUpdate();
        }

        this.setState({
            questionOption: '',
        })
    }

    render() {

        return (
            <div className="wrapper">

                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <a href="" className="simple-text">
                            Saylani Welfare
				        </a>
                    </div>

                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li>
                                <Link to={{ pathname: '/admin/dashboard' }}>
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li className="active">
                                <Link to={{ pathname: '/admin/createquiz' }}>
                                    <i className="material-icons">person</i>
                                    <p className="colorrr">Create Quiz</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createCourse' }}>
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Course</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '' }}>
                                    <i className="material-icons">location_on</i>
                                    <p>Maps</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '' }}>
                                    <i className="material-icons text-gray">notifications</i>
                                    <p>Notifications</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

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
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">person</i>
                                            <p className="hidden-lg hidden-md">Profile</p>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <i className="material-icons">person</i>

                                                <a href="#">Admin</a></li>
                                            <li><a href="#">Sign-Out</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <form className="navbar-form navbar-right" role="search">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i><div className="ripple-container"></div>
                                    </button>
                                </form>

                            </div>
                        </div>
                    </nav>

                    <div className="content">
                        <button type="submit" className="pull-right btn btn-danger" onClick={this.quizFormingFinished.bind(this)}>Finish</button>
                        <div className="container-fluid">

                            <section>

                                <div className="content-wrapper">

                                    <div className="table-grid todo">
                                        <div className="col col-lg">
                                            <div className="pr-lg">
                                                <form className="mb-xl">
                                                    <div className="form-group" style={{ marginTop: '0px' }}>
                                                        <input type="text" onChange={this.QuizTitle.bind(this)} placeholder="Quiz Title" required="required" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control form-control-selectpicker" onChange={this.selectedCourseforQuiz.bind(this)}>
                                                            <option value="0">Select Course</option>
                                                            <option value="Git">Git</option>
                                                            <option value="JavaScript">JavaScript</option>
                                                            <option value="Css">Css</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col todo-item-list">

                                            <div className="btn btn-primary btn-block" style={{ cursor: 'text' }}>Create Question</div>
                                            <div className="form-group">
                                                <textarea placeholder="Type a Question" onChange={this.setQuestion.bind(this)} rows="8" className="form-control" value={this.state.question}></textarea>
                                            </div>

                                            <div className="todo-item panel panel-default todo-complete" style={{ float: 'left', width: '50%' }}>
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <span role="button" data-toggle="collapse-disabled" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="clickable">
                                                            <span className="todo-title">
                                                                <input onChange={this.setOption.bind(this)} value={this.state.questionOption} style={{ width: '100%' }} id="todo-item-0" />
                                                            </span>
                                                        </span>
                                                    </h4>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary" onClick={this.addOption.bind(this)}>Add as Option</button>
                                            <button className="btn btn-primary" style={{ float: 'right' }} onClick={this.SaveQuestion.bind(this)}>Next</button>
                                            <div style={{ clear: 'both' }} ></div>
                                            {this.generateList.map((item, index) => { return <div key={index} id="accordion" role="tablist" aria-multiselectable="true" className="panel-group">{item}</div> })}



                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*<div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="orange">
                                            <i className="material-icons">content_copy</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4</p>
                                            <h3 className="title">250<small>Students</small></h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-danger">warning</i> <a href="#pablo">Get More Space...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="green">
                                            <i className="material-icons">store</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.1</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">date_range</i> Last 24 Hours
									</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="red">
                                            <i className="material-icons">info_outline</i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.2</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">local_offer</i> Tracked from Github
									        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="blue">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.3</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">update</i> Just Updated
									        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header" data-background-color="blue">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="card-content">
                                            <p className="category">Batch 4.4</p>
                                            <h3 className="title">250<small>Students</small></h3>

                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">update</i> Just Updated
									        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}

                            {/*<div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="green">
                                            <div className="ct-chart" id="dailySalesChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Daily Sales</h4>
                                            <p className="category"><span className="text-success"><i className="fa fa-long-arrow-up"></i> 55%  </span> increase in today sales.</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
									</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="orange">
                                            <div className="ct-chart" id="emailsSubscriptionChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Email Subscriptions</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> campaign sent 2 days ago
									</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header card-chart" data-background-color="red">
                                            <div className="ct-chart" id="completedTasksChart"></div>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="title">Completed Tasks</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> campaign sent 2 days ago
									</div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}

                            {/*<div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="card card-nav-tabs">
                                        <div className="card-header" data-background-color="purple">
                                            <div className="nav-tabs-navigation">
                                                <div className="nav-tabs-wrapper">
                                                    <span className="nav-tabs-title">Tasks:</span>
                                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                                        <li className="">
                                                            <a href="#profile" data-toggle="tab">
                                                                <i className="material-icons">bug_report</i>
                                                                Bugs
                                                                <div className="ripple-container"></div></a>
                                                        </li>
                                                        <li className="">
                                                            <a href="#messages" data-toggle="tab">
                                                                <i className="material-icons">code</i>
                                                                Website
                                                                <div className="ripple-container"></div></a>
                                                        </li>
                                                        <li className="">
                                                            <a href="#settings" data-toggle="tab">
                                                                <i className="material-icons">cloud</i>
                                                                Server
													            <div className="ripple-container"></div></a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="profile">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="messages">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="tab-pane" id="settings">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
														</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input type="checkbox" name="optionsCheckboxes" />
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                                        <i className="material-icons">edit</i>
                                                                    </button>
                                                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                        <i className="material-icons">close</i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="card">
                                        <div className="card-header" data-background-color="orange">
                                            <h4 className="title">Employees Stats</h4>
                                            <p className="category">New employees on 15th September, 2016</p>
                                        </div>
                                        <div className="card-content table-responsive">
                                            <table className="table table-hover">
                                                <tbody className="text-warning"> 
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Salary</th>
                                                    <th>Country</th>
                                                    </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dakota Rice</td>
                                                        <td>$36,738</td>
                                                        <td>Niger</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Minerva Hooper</td>
                                                        <td>$23,789</td>
                                                        <td>Curaçao</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Sage Rodriguez</td>
                                                        <td>$56,142</td>
                                                        <td>Netherlands</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Philip Chaney</td>
                                                        <td>$38,735</td>
                                                        <td>Korea, South</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}

                        </div>
                    </div>

                    {/*<footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Company
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Portfolio
								</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Blog
								</a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="copyright pull-right">
                                &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
					</p>
                        </div>
                    </footer>*/}
                </div>
            </div>
        );
    }
}


export const CreateQuiz = connect(mapStateToProp, mapDispatchToProp)(CreateQuizComp);