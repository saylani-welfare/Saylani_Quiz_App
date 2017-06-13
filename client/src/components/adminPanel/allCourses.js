import React from 'react';
import '../../../public/assets/css/material-dashboard.css';


export default class AllCourses extends React.Component {

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
                            {this.props.listOfCourses.map((Corname) => {
                                return (
                                    <div key={Corname._id}>
                                        <a href="#" className="list-group-item">{Corname.course}<span style={{ float: 'right' }}><i onClick={this.props.clickHandler.bind(this, Corname._id)} className="fa fa-trash-o" aria-hidden="true"></i></span></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
