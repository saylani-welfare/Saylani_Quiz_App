
import React from 'react';
import '../style.css';
import AdminSignInMiddleware from '../../middlewares/adminSignInMiddleware.js';
import { Store } from '../../store/store.js'
import { connect } from 'react-redux';

function mapDispatchToProp(dispatch) {
    return {
        adminLogin: (currentInput) => { Store.dispatch(AdminSignInMiddleware.getAdminsData(currentInput)) }
    }
}

export class AdminComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            adminEmail: '',
            adminPass: ''
        }
    }

    adminEmail(event) {
        this.setState({
            adminEmail: event.target.value
        })
    }

    adminPassword(event) {
        this.setState({
            adminPass: event.target.value
        })
    }

    SignIn() {
        // console.log(this.state);
        this.props.adminLogin(this.state);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        {/*<h1 className="text-center login-title">Sign in to continue to Bootsnipp</h1>*/}
                        <div className="account-wall">
                            <center style={{ marginBottom: '30px' }}><img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" /></center>
                            {/*<form className="form-signin">*/}
                            <input type="text" onChange={this.adminEmail.bind(this)} className="form-control" placeholder="Email" required />
                            <input type="password" onChange={this.adminPassword.bind(this)} className="form-control" placeholder="Password" required />
                            <button onClick={this.SignIn.bind(this)} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            {/*</form>*/}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const Admin = connect(null, mapDispatchToProp)(AdminComp);
