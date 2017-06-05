import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';

export default class AllPrograms extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            availablePrograms: []
        }
    }

    componentDidMount() {
        var allPrograms = [];
        axios.get('http://localhost:3050/api/getAllPrograms')
            .then(function (response) {
                // allPrograms.push(response.data)
                // console.log(response)
                response.data.map((name) => {
                    return allPrograms.push(name)
                })
            })
            .then(() => {
                this.setState({
                    availablePrograms: allPrograms
                })
                // console.log(this.availablePrograms);
            })
    }

    del() {
        console.log('delete');
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">All Programs</a></li>
                            </ul>
                            <br />
                            {this.state.availablePrograms.map((obj, index) => {

                                return (
                                    <div key={index}>
                                        <a href="#" className="list-group-item">{obj.program}<span style={{ float: 'right' }}><i onClick={this.del.bind(this)} className="fa fa-trash-o" aria-hidden="true"></i></span></a>
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
