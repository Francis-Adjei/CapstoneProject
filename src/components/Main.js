import React, { Component } from 'react';
import Header from './header';
import QuoteGenerator from './QuoteGenerator';
import Footer from './footer';


class Main extends Component {
    render() {
        return (
            <section className= 'hero'>
                <nav>
                    <Header/>
                    <button className='btn'>Logout</button>
                </nav><br></br>
                <QuoteGenerator/>
                <Footer/>
            </section>
           
        );
    }
}

export default Main;
