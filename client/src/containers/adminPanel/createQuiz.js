
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { persistStore } from 'redux-persist';
import { Link } from 'react-router';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import Logout from '../../components/adminPanel/logout.js';
import AddQuiz from '../../components/adminPanel/addQuiz.js';
import MakeMCQS from '../../components/adminPanel/makeMCQs.js';
import { browserHistory } from 'react-router';

export class CreateQuiz extends React.Component {

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
                            <a className="navbar-brand" href="#">Create Quiz</a>
                        </div>

                        {/*<Logout />*/}

                    </div>
                </nav>

                <div className="content">
                    <div className="container-fluid">

                        <AddQuiz />
                        <MakeMCQS />

                    </div>
                </div>
            </div>
        );
    }
}