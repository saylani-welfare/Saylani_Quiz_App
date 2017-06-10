
import React from 'react';
import '../../../public/assets/css/style.css';
import Logout from '../../components/adminPanel/logout.js';
import { Link } from 'react-router';


export class Admin extends React.Component {

    render() {
        //cannot come on this page using browser back button
        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

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
                                    <i className="fa fa-circle"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createProgram' }}>
                                    {/*<i className="fa fa-circle"></i>*/}
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Program</p>
                                </Link>

                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createBatch' }}>
                                    {/*<i className="fa fa-circle"></i>*/}
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Batch</p>
                                </Link>
                            </li>
                            <li >
                                <Link to={{ pathname: '/admin/createCourse' }}>
                                    {/*<i className="fa fa-circle"></i>*/}
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Course</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/admin/createquiz' }}>
                                    {/*<i className="fa fa-circle"></i>*/}
                                    <i className="material-icons">content_paste</i>
                                    <p>Create Quiz</p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                {this.props.children}

            </div>
        );
    }
}


