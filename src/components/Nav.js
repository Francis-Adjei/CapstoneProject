import React, { Component } from 'react';
import Header from './header';
import QuoteGenerator from './QuoteGenerator';
import Footer from './footer';


class Nav extends Component {
    render() {
        return (
            <section className= 'hero'>
                <nav>
                    <Header/>
                    <button className='btn'>Search</button>
                    <button className='btn'>Logout</button>
                </nav>
                <QuoteGenerator/>
                <Footer/>
            </section>
           
        );
    }
}

export default Nav;
