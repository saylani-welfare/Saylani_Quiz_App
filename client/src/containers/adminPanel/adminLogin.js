
import React from 'react';
import '../../../public/assets/css/style.css';
import { connect } from 'react-redux';
import Store from '../../store/store.js';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import adminDefaultPic from '../../../public/assets/images/round.png';


function mapDispatchToProps(dispatch) {
    return {
        isUserAuthentic: (userCredentail) => { Store.dispatch(TokenMiddlware.isUserAuthentic(userCredentail)) }
    }
}

class AdminLoginComp extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            adminName: '',
            password: ''
        }
    }

    nameInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            adminName: val
        })
    }

    passInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            password: val
        })
    }

    Signin() {
        this.props.isUserAuthentic(this.state)
    }

    render() {

        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">

                        <div className="account-wall">
                            <center style={{ marginBottom: '30px' }}><img className="profile-img" src={adminDefaultPic}
                                alt="" />
                            </center>

                            <input type="text" className="form-control" placeholder="Admin name" onChange={this.nameInputBox.bind(this)} required />
                            <input type="password" className="form-control" placeholder="Password" onChange={this.passInputBox.bind(this)} required />
                            <button className="btn btn-lg btn-primary btn-block" onClick={this.Signin.bind(this)} type="submit">Sign in</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const AdminLogin = connect(null, mapDispatchToProps)(AdminLoginComp);
