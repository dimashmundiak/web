import React, { Component } from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { tasksActions } from '../../actions';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.getQuote = this.getQuote.bind(this);
    }

    componentWillMount() {
        this.getQuote();
    }

    getQuote() {
        this.props.get();
    }

    render() {
        return (
            <div className="actions">
                <button className="btn get-button" onClick={this.getQuote}>Get New Quote</button>
            </div>
        )
    }
}

const connectedButton = connect(state => {
    return {}
}, {
        get: tasksActions.getQuote
    })(Button);

export { connectedButton as Button };