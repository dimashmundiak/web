import React, { Component } from 'react';
import './Quote.css';

import { connect } from 'react-redux';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { quote } = this.props;
        return (
            <div className="quote">
                {quote.quote &&
                    <div>
                        <div className="text">
                            {quote.quote.quotes[0].body}
                        </div>
                        <div className="author">
                            {quote.quote.quotes[0].author}
                        </div>
                    </div>}
            </div>
        )
    }
}

const connectedQuote = connect(state => {
    const { quote } = state;
    return {
        quote
    }
})(Quote);

export { connectedQuote as Quote };
