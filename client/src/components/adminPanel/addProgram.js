import React from 'react';
import '../../../public/assets/css/material-dashboard.css';

export default class AddProgram extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Add Program</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" onChange={this.props.changeHandler} value={this.props.inputBoxState} placeholder="Program Name" />
                                        <a className="btn icon-btn btn-success" onClick={this.props.clickHandler} ><span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>Add Program</a>
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


