import React, { Component } from 'react';
import './Card.css';

import { Quote } from '../Quote';
import { Button } from '../Button';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <Quote />
                <Button />
            </div>
        )
    }
}

export { Card };