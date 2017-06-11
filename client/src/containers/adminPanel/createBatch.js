
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Link } from 'react-router';
import Logout from '../../components/adminPanel/logout.js';
import axios from 'axios';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {purple500} from 'material-ui/styles/colors';

export class CreateBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            program: [],
            // program_value:'selectbatch',
            selectValue: 'ccna'
        }
    }
    componentDidMount() {
        console.log("component didi mount running")
        axios.get('http://localhost:3050/api/getAllPrograms')
            .then((res, err) => {
                this.setState({
                    program: res.data
                })
            })

    }
    handleChange(e, key) {
        this.setState({ selectValue: e.target.childNodes[0].nodeValue });
        var select = e.target.childNodes[0].nodeValue;
        console.log(select);
    }
    createBatch() {

        let program_name = this.state.selectValue;
        let batch = this.refs.batchname.getValue();

        console.log("=====", program_name)

        axios.post('http://localhost:3050/api/addBatch', {
            batch: batch,
            program_name: program_name

        })
            .then(function (response) {
                console.log(response.data)
            })

    }

    render() {

        (function () {
            function disableBack() { window.history.forward() }
            window.onload = disableBack();
            window.onpageshow = function (evt) { if (evt.persisted) disableBack() }
        })();

        return (
            <div className="wrapper">
                {console.log("value++==", this.state.selectValue)}

                

                <div className="main-panel">

                    <nav className="navbar navbar-transparent navbar-absolute">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            
                                <a className="navbar-brand" href="#">Create Batch</a>
                            </div>

                            {/*<Logout />*/}

                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="card">
                                            <ul className="nav nav-tabs">
                                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">batch list</a></li>

                                            </ul>
                                            <div className="form-group">

                                               
                                                <DropDownMenu value={this.state.selectValue} onChange={this.handleChange.bind(this)}>

                                                    <MenuItem value={this.state.selectValue} primaryText="SelectProgram" />
                                                    {this.state.program.map((v, i) => {
                                                        return (<MenuItem key={i} value={v.program} primaryText={v.program} />)

                                                    })}
                                                    
                                                </DropDownMenu>

                                            </div>

                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="home">
                                                    <div className="form-group  is-empty">
                                                       
                                                        <TextField
                                                       
                                                            hintText="BatchName/Id"
                                                            floatingLabelText="Batch Id"
                                                             floatingLabelFocusStyle={{color: purple500}}
                                                             underlineFocusStyle={{borderColor:purple500}}
                                                             ref="batchname"
                                                        /><br/>
                                                       
                                                         <RaisedButton backgroundColor="purple" onClick={() => this.createBatch()}  label="CreateBatch" />
                                                    </div>

                                                    <div className="panel panel-default widget">
                                                        <div className="panel-body">
                                                            <ul className="list-group" style={{ marginTop: '0px' }}>

                                                            </ul>
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
            </div>

        )
    }
}