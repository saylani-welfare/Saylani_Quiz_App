import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import { browserHistory } from 'react-router';
import fblogin from './images/fblogin.png';
import { FacebookLogin } from 'react-facebook-login-component';
import axios from 'axios';

function mapStateToProps(state) {
    return {
        AUTH_TOKEN: state.TokenReducer.auth_token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        rmTOKEN: () => { Store.dispatch(TokenMiddlware.RemoveToken()) }
    }
}

class Logout extends React.Component {

    componentWillMount() {
        persistStore(Store, {}, () => {
            if (this.props.AUTH_TOKEN === '') {
                browserHistory.push('/admin');
                // console.log(this.props.AUTH_TOKEN );
            }
        });
    }

    logout() {

        this.props.rmTOKEN();
        browserHistory.push('/admin');
    }
    loginwithFb(){
        
         axios.post('http://localhost:3000/v1/facebook_auth').then((response) => {
        // var token = response.data.token;
        
        });
      }
      
    




       
    //    axios.get('http://localhost:3050/auth/facebook')
    //         .then((res, err) => {
    //             this.setState({
    //                 program: res.data
    //             })
    //         })
    

    render() {
        return (
            <div className="collapse navbar-collapse">
                {/*<ul className="nav navbar-nav navbar-right">
                    <button onClick={this.logout.bind(this)} className="btn btn-primary btn-round">Logout</button>
                    <img src={fblogin} style={{width:300,height:70}} className="img-responsive"/>
                    <img className="img-responsive" src={fblogin} alt="quiz" style={{width:"100px"}} />
                </ul>*/}
                
<button onClick={this.fblogin.bind(this)}>Login with fb</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

