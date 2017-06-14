import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import { Store } from '../../store/store.js';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import { browserHistory } from 'react-router';
import fblogin from './images/fblogin.png';

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
        return(
            <div>
                {/*<button> loginwithFb</button>*/}
                <img src={fblogin} style={{width:200,height:50}}/>
            </div>
        )
    }

    render() {
        return (
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    {/*<button onClick={this.logout.bind(this)} className="btn btn-primary btn-round">Logout</button>*/}
                    {this.loginwithFb()} 
                </ul>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

