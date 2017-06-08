import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';

export default class AllCourses extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            availableCourses: [],
            success: 'none'
        }
        this.flag = true
    }

    componentWillUnmount() {
        this.flag = false
    }

    componentDidMount() {
        var allCourses = [];
        axios.get('http://localhost:3050/api/getAllCourses')
            .then(function (response) {
                allCourses = response.data
            })
            .then(() => {
                
                if (this.flag === true) {
                    this.setState({
                        availableCourses: allCourses
                    })
                }
            })
    }

    del(Cid) {
        // console.log(Cid)
        axios.delete('http://localhost:3050/api/deleteCourse/' + Cid)
            .then(function (response) {
                console.log('deleted')
            })
            .then(() => {
                this.setState({
                    success: 'block'
                })
                window.location.assign('/admin/createCourse');

            })
            .catch(() => {
                alert('Failed To Delete');
            })
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">All Courses</a></li>
                            </ul>
                            <br />
                            {this.state.availableCourses.map((Corname) => {
                                return (
                                    <div key={Corname._id}>
                                        <a href="#" className="list-group-item">{Corname.course}<span style={{ float: 'right' }}><i onClick={this.del.bind(this, Corname._id)} className="fa fa-trash-o" aria-hidden="true"></i></span></a>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="alert alert-success" style={{ display: this.state.success }}>
                            <b>Successfully Deleted !!</b>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
