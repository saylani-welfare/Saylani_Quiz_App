import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class AddQuiz extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Add Quiz</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" onChange={this.props.changeHandler} value={this.props.quizName} placeholder="Quiz Title" />
                                    </div>
                                </div>
                            </div>

                            <label style={{ position: 'relative', bottom: '25px', paddingLeft: '20px' }}>Courses</label>
                            <DropDownMenu value={this.props.pickedCourse} onChange={this.props.changeHandler1} style={{ width: '150px' }}>
                                {
                                    this.props.listOfCourse.map((Cname, index) => {
                                        return (
                                            <MenuItem key={index} value={Cname.course} primaryText={Cname.course} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <button style={{ backgroundColor: "grey", float: 'right', marginRight: '50px' }} onClick={this.props.clickHandler} className="btn btn-primary btn-round">Add Quiz</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
