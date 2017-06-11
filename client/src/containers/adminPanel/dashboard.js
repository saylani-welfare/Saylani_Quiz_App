
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { persistStore } from 'redux-persist';
import { Link } from 'react-router';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import '../../../public/assets/css/style.css';
import { browserHistory } from 'react-router';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import Logout from '../../components/adminPanel/logout.js';


export class Dashboard extends React.Component {

    render() {

        //cannot come on this page using browser back button
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
                            <a className="navbar-brand" href="#">Dashboard</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                {/*<Logout />*/}

                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
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
                        </div>

                        <div className="row">
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
                        </div>

                        <div className="row">
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
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

