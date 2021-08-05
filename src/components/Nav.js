import React, { Component } from 'react';
import QuoteGenerator from './QuoteGenerator';


class Nav extends Component {
    render() {
        return (
            <section className= 'hero'>
                <nav>
                    <h2>Welcome</h2>
                    <button>Logout</button>
                </nav>
                <QuoteGenerator/>
            </section>
        );
    }
}

export default Nav;
