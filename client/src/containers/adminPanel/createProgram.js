
import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Link } from 'react-router';
import axios from 'axios';
import { persistStore } from 'redux-persist';
import AddProgram from '../../components/adminPanel/addProgram.js';
import AllPrograms from '../../components/adminPanel/allPrograms.js';
import Logout from './logout';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import AsyncMiddlware from '../../middlewares/adminMiddlewares/asyncMiddleware'

function mapStateToProps(state) {
    return {
        programlist: state.AsyncReducer.ProgramList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProgram: (programName) => { Store.dispatch(AsyncMiddlware.addProgram(programName)) },
        getAllPrograms: () => { Store.dispatch(AsyncMiddlware.getAllPrograms()) },
        deleteProgram: (Pid) => { Store.dispatch(AsyncMiddlware.deleteProgram(Pid)) }
    }
}


class CreateProgramComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            program: ''
        }
    }

    // Functionalites of addProgram

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            program: val
        })
    }

    addAProgram() {

        this.props.addProgram(this.state.program);
        this.setState({
            program: ''
        })
    }

    // Functionalites of allPrograms

    componentDidMount() {

        persistStore(Store, {}, (err, result) => {
            this.props.getAllPrograms();
        })
    }

    del(Pid) {
        
        this.props.deleteProgram(Pid);
    }

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
                            <a className="navbar-brand" href="#">Create Program</a>
                        </div>

                        <Logout />

                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">

                        <AddProgram changeHandler={this.inputBoxValue.bind(this)} inputBoxState={this.state.program} clickHandler={this.addAProgram.bind(this)} />

                        <AllPrograms showAll={this.props.programlist} deleteProgram={this.del.bind(this)} />

                    </div>
                </div>
            </div>
        )
    }
}

export const CreateProgram = connect(mapStateToProps, mapDispatchToProps)(CreateProgramComp);
