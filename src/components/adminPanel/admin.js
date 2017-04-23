
import React from 'react';
import '../style.css';

export class Admin extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
