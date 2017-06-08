
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Link } from 'react-router';
import Logout from '../../components/adminPanel/logout.js';

export class CreateBatch extends React.Component {

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
                            <a className="navbar-brand" href="#">Create Batch</a>
                        </div>

                        <Logout />

                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">

                    {/*Batch Components Be Here....*/}

                    </div>
                </div>
            </div>

        )
    }
}