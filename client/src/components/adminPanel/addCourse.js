import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class AddCourse extends React.Component {

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
                                        <input type="text" className="form-control" onChange={this.props.changeHandler} value={this.props.courseName} placeholder="Course Name" />
                                    </div>
                                </div>
                            </div>

                            <label style={{ position: 'relative', bottom: '25px', paddingLeft: '25px' }}>Programs</label>
                            <DropDownMenu value={this.props.ProgramDD} onChange={this.props.DDchangeHandler2} style={{ width: '150px' }}>
                                {
                                    this.props.listOfPrograms.map((ProgramObj, index) => {
                                        return (
                                            <MenuItem onClick={this.props.clickHandler.bind(this, ProgramObj.program)} key={index} value={ProgramObj.program} primaryText={ProgramObj.program} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <label style={{ position: 'relative', bottom: '25px' }}>Batches</label>
                            <DropDownMenu value={this.props.batchDD} onChange={this.props.DDchangeHandler1} style={{ width: '150px' }}>
                                {
                                    this.props.listOfBatches.map((Bname, index) => {
                                        return (
                                            <MenuItem key={index} value={Bname} primaryText={Bname} />
                                        )
                                    })
                                }
                            </DropDownMenu>

                            <div className="tab-content">
                                <a className="btn icon-btn btn-success" onClick={this.props.addcourse}><span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>Add Course</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


