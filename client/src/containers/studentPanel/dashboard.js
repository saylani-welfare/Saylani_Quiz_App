import React from 'react';
import '../../../public/assets/css/style.css';
import Logout from './fblogin.js';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AvatarExampleSimple from '../avatar.js';

import fblogin from './images/fblogin.png'
// import Menu from 'material-ui/svg-icons/action/reorder';
// import ADD from 'material-ui/svg-icons/content/add';
// import Create from 'material-ui/svg-icons/content/create';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            open: false,
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });



    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
            headerButton: {
                // border: '2px solid red',
                marginTop: '5px',
                // width:"150px",
                // height:"40px",
                backgroundColor:"#3b5998",
                color:"white"
            },
            button: {
                color: '#fafbfc',
                fontFamily: 'Verdana'
            },
            appbar:{
                backgroundColor:"#2C3E50",
                height:"100px",
                fontFamily:'Ariel',
                fontStyle:'italic',
                
            },
            color:{
                color:"white"
            }

        };
        return (
            <div>
               
                <AppBar
                    style={styles.appbar}
                    
                    title="Quiz Time"
                   
                    onTouchTap={this.handleToggle}
                    iconElementRight={
                        
                        <div style={styles.headerButton}>
                            <FlatButton label="Login With Facebook"
                               style={styles.color}
                            />
                            {/*{this.state.isLogged === false ?
                                <span>
                                    <Logout />
                                </span> : void 0}

                            {this.state.isLogged === true ?
                                <div>

                                </div> : void 0}*/}
                               
                               
                        </div>
                    }
                />

                <Drawer open={this.state.open} >
                    <div style={{ height: "100px", backgroundColor: "#2C3E50" }}>
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
                            
                        </div>
                    </div>
                </Drawer>

                {this.props.children}
            </div>
        )
    }
}

