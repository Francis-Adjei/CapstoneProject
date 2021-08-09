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
                    <button className='btn'>Logout</button>
                </nav><br></br>
                <input type='text'></input>
                <QuoteGenerator/>
                <Footer/>
            </section>
           
        );
    }
}

export default Nav;
