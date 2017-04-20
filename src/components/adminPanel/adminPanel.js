
import React from 'react';
import '../style.css';

export class AdminPanel extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
