import React from 'react';
import '../../../public/assets/css/style.css';
import Logout from './fblogin.js';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import AvatarExampleSimple from '../avatar.js';
import { FacebookLogin } from 'react-facebook-login-component';
import fblogin from './images/fblogin.png'

import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs';
import ListItem from 'react-md/lib/Lists/ListItem';
import MenuButton from 'react-md/lib/Menus/MenuButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

export class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            open: false,
            userName: 'userName'
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }


    // handleToggle = () => this.setState({ open: !this.state.open });

    responseFacebook(response) {
        console.log(response.name);

        // this.state.isLogged=!this.state.isLogged
        this.setState({
            isLogged: !this.state.isLogged,
            userName: response.name,
            visible:false
        })
    }
    open = () => {
        this.setState({ visible: true });
    };

    close = () => {
        this.setState({ visible: false });
    };

    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
            headerButton: {
                // border: '2px solid red',
                marginTop: '5px',
                // width:"150px",
                height: "40px",
                backgroundColor: "#3b5998",
                color: "white"
            },
            button: {
                color: '#fafbfc',
                fontFamily: 'Verdana'
            },
            appbar: {
                backgroundColor: "#2C3E50",
                height: "100px",
                fontFamily: 'Ariel',
                fontStyle: 'italic',

            },
            color: {
                color: "white"
            },
            user: {
                color: "white",
                fontSize: "20px"
            }

        };
        return (
            <div>
                {console.log(this.state.isLogged)}
                <AppBar
                    style={styles.appbar}

                    title="Quiz Time"

                    //  onTouchTap={this.handleToggle}
                    showMenuIconButton={false}

                    iconElementRight={
                        this.state.isLogged ? <span><p style={styles.user}>{this.state.userName}</p>
                            {/*<IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
                                
                                <MenuItem primaryText="Sign out" />
                            </IconMenu>*/}
                            <MenuButton
                                id="button-menu"
                                label="Toggle Open a Menu"
                                raised
                                buttonChildren="chat"
                                className="menu-example"
                            >
                                <ListItem onClick={this.open} primaryText="Item One" />

                            </MenuButton>

                        </span>
                            :
                            <div style={styles.headerButton}>
                                <FacebookLogin socialId="246893679122461"
                                    style={styles.headerButton}
                                    language="en_US"
                                    scope="public_profile,email"
                                    responseHandler={this.responseFacebook}
                                    xfbml={true}
                                    fields="id,email,name"
                                    version="v2.5"
                                    className="facebook-login"
                                    buttonText="Login With Facebook" />

                            </div>
                    }
                />


                <Drawer open={false} >
                    <div style={{ height: "100px", backgroundColor: "#2C3E50" }}>
                        <AvatarExampleSimple />
                    </div>

                    <br />
                    <div data-color="purple" >

                        <div className="logo" style={{ textAlign: "center" }}>
                            <a href="" className="simple-text">
                                Saylani Welfare
				            </a>
                        </div>

                        <div className="sidebar-wrapper">

                        </div>
                    </div>
                </Drawer>

                {this.props.children}
            </div>
        )
    }
}

