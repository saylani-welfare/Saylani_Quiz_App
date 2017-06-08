import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';


export default class MakeMCQS extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Optvalue: '',
            OptsArray: []
        }
    }

    handleChange(eve) {
        var val = eve.target.value
        this.setState({
            Optvalue: val
        })
    }

    addOpt() {

        this.state.OptsArray.push(this.state.Optvalue)
        this.state.Optvalue = ''
        this.forceUpdate();
    }

    removeOpt(index) {

        this.state.OptsArray.pop(index)
        this.forceUpdate();
    }

    Next() {
        console.log("Save To Store")
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Make MCQ's</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">

                                        <div className="container bootstrap snippet">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="widget-five mb30">
                                                        <textarea rows="5" className="form-control resize-v post-area" placeholder="Enter a Question here...."></textarea>
                                                        <br />
                                                        <div className="todo-item panel panel-default todo-complete">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <span role="button" data-toggle="collapse-disabled" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="clickable">
                                                                        <span className="todo-title">
                                                                            <input value={this.state.Optvalue} onChange={this.handleChange.bind(this)} placeholder='Write Option' style={{ width: '100%' }} id="todo-item-0" />
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <ul className="post-tools list-unstyled clearfix">

                                                            <li className="pull-right">
                                                                <button onClick={this.addOpt.bind(this)} className="btn btn-primary">Add Option</button>
                                                            </li>
                                                        </ul>
                                                        <table className="table">
                                                            <tbody>

                                                                {this.state.OptsArray.map((OptText, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <input type="checkbox" name="optionsCheckboxes" />
                                                                            </td>
                                                                            <td style={{ width: '100%' }} >{OptText}</td>
                                                                            <td className="td-actions text-right">
                                                                                <button onClick={this.removeOpt.bind(this, index)} type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                                                    <i className="material-icons">close</i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })}

                                                            </tbody>
                                                        </table>

                                                        <button style={{ backgroundColor: "Green" }} onClick={this.Next.bind(this)} className="btn btn-primary">Next</button>

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
