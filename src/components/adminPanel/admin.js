
import React from 'react';
import '../style.css';

export class Admin extends React.Component {

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        {/*<h1 className="text-center login-title">Sign in to continue to Bootsnipp</h1>*/}
                        <div className="account-wall">
                            <center style={{marginBottom: '30px'}}><img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" /></center>
                            <form className="form-signin">
                                <input type="text" className="form-control" placeholder="Email" required />
                                <input type="password" className="form-control" placeholder="Password" required />
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
