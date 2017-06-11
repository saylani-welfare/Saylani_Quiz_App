
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { persistStore } from 'redux-persist';
import { Link } from 'react-router';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import Logout from '../../components/adminPanel/logout.js';
import AddCourse from '../../components/adminPanel/addCourse.js';
import AllCourses from '../../components/adminPanel/allCourses.js';


export class CreateCourse extends React.Component {

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
                            <a className="navbar-brand" href="#">Create Course</a>
                        </div>

                        {/*<Logout />*/}

                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">

                        <AddCourse />
                        <AllCourses />

                    </div>
                </div>
            </div>
        );
    }
}
