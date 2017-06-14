
import React from 'react';
import '../../../public/assets/css/style.css';
import Logout from '../../components/adminPanel/logout.js';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AvatarExampleSimple from '../avatar.js'
import Menu from 'material-ui/svg-icons/action/reorder';
import ADD from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
// import edit from 'material-ui/svg-icons/editor/';

export class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            open: false,
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });



    render() {

        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();


        const styles = {
            title: {
                cursor: 'pointer',
            },
            headerButton: {
                // border: '2px solid red',
                marginTop: '5px',
            },
            button: {
                color: '#fafbfc',
                fontFamily: 'Verdana'
            },
            appbar: {
                backgroundColor: "purple",
                height: "80px",
                textAlign: "center",
                fontFamily: 'Roboto, sans-serif',
            }

        };
        return (

            <div className="wrapper">

                <AppBar
                    style={styles.appbar}
                    title="Saylani Quiz App"
                    onTouchTap={this.handleToggle}
                    iconElementRight={
                        <div style={styles.headerButton}>
                            {this.state.isLogged === false ?
                                <span>
                                    <Logout />
                                </span> : void 0}

                            {this.state.isLogged === true ?
                                <div>

                                </div> : void 0}


                        </div>
                    }
                />

                <Drawer open={this.state.open} >
                    <div style={{ height: "80px", backgroundColor: "purple" }}>
                        <AvatarExampleSimple />
                    </div>

                    <br />
                    <div data-color="purple" >

                        <div className="logo" style={{textAlign:"center"}}>
                            <a href="" className="simple-text">
                                Saylani Welfare
				            </a>
                        </div>

                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                <li>
                                    <Link to={{ pathname: '/admin/dashboard' }}>
                                        <span> <Menu title="Dashboard" /> Dashboard</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link to={{ pathname: '/admin/createProgram' }}>
                                        {/*<i className="fa fa-circle"></i>*/}
                                        <span><ADD /> Create Program</span>

                                    </Link>

                                </li>
                                <li>
                                    <Link to={{ pathname: '/admin/createBatch' }}>

                                        <span><Create />  createBatch</span>
                                    </Link>
                                </li>
                                <li >
                                    <Link to={{ pathname: '/admin/createCourse' }}>
                                        <span><Create/> createCourse</span>
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to={{ pathname: '/admin/createquiz' }}>
                                        
                                       <span><Create/> createquiz</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Drawer>



                {this.props.children}

            </div>
        );
    }
}


