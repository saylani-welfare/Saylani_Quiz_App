import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import { browserHistory } from 'react-router';

export default class AddCourse extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            courseVal: '',
            allBatches: [],
            allPrograms: [],
            value1: '',
            value2: ''
        }
    }

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            courseVal: val
        })
    }

    componentWillMount() {
        var Programs = [];

        axios.get('http://localhost:3050/api/getAllPrograms')
            .then(function (response) {
                response.data.map((Obj) => {
                    Programs.push(Obj.program)
                })
            })
            .then(() => {
                this.setState({
                    allPrograms: Programs
                })
            })
    }

    fetchBatches(Pname) {
        var Batches = [];
        var config = {
            headers: { program_name: Pname }
        }

        axios.get('http://localhost:3050/api/getSpecificBatches', config)
            .then(function (response) {
                response.data.map((Obj) => {
                    Batches.push(Obj.batch)
                })
            })
            .then(() => {
                this.setState({
                    allBatches: Batches
                })
            })
    }

    handleChange1 = (event, index, value1) => this.setState({ value1 });
    handleChange2 = (event, index, value2) => this.setState({ value2 });

    addACourse() {
        // console.log(this.state.courseVal, this.state.value1, this.state.value2);

        axios.post('http://localhost:3050/api/addCourse', { course: this.state.courseVal, batch_name: this.state.value1, program_name: this.state.value2 })
            .then(function (response) {
                console.log({ success: true })
            })
            .then(() => {
                this.setState({
                    courseVal: '',
                    value1: '',
                    value2: ''
                })
                window.location.assign('/admin/createCourse');
            })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Add Course</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" onChange={this.inputBoxValue.bind(this)} value={this.state.courseVal} placeholder="Course Name" />
                                    </div>
                                </div>
                            </div>

                            <label style={{ position: 'relative', bottom: '25px', paddingLeft: '25px' }}>Programs</label>
                            <DropDownMenu value={this.state.value2} onChange={this.handleChange2} style={{ width: '150px' }}>
                                {
                                    this.state.allPrograms.map((Pname, index) => {
                                        return (
                                            <MenuItem onClick={this.fetchBatches.bind(this, Pname)} key={index} value={Pname} primaryText={Pname} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <label style={{ position: 'relative', bottom: '25px' }}>Batches</label>
                            <DropDownMenu value={this.state.value1} onChange={this.handleChange1} style={{ width: '150px' }}>
                                {
                                    this.state.allBatches.map((Bname, index) => {
                                        return (
                                            <MenuItem key={index} value={Bname} primaryText={Bname} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <div className="tab-content">
                                <a className="btn icon-btn btn-success" onClick={this.addACourse.bind(this)}><span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>Add Course</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


