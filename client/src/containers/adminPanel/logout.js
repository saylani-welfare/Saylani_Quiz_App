import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import Store from '../../store/store.js';
import { connect } from 'react-redux';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import { browserHistory } from 'react-router';


function mapDispatchToProps(dispatch) {
    return {
        rmTOKEN: () => { Store.dispatch(TokenMiddlware.RemoveToken()) }
    }
}

class Logout extends React.Component {

    logout() {
        this.props.rmTOKEN();
        browserHistory.push('/admin');
    }

    render() {
        return (
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <button onClick={this.logout.bind(this)} className="btn btn-primary btn-round">Logout</button>
                </ul>

            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);

