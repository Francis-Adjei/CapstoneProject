import React, { Component } from 'react';

class QuoteGenerator extends Component {
    render() {
        return (
            <div className='QuoteGenerator'>
                <div className='quote'>
                    <h2>New Quote</h2>
                    <small>-Author-</small>
                </div><br/>
                <button className='btn'>Generate New Quote</button>
            </div>
        );
    }
}

export default QuoteGenerator;
