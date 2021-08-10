import React from 'react';
import Header from './header';
import QuoteGenerator from './QuoteGenerator';
import Footer from './footer';


 
 
function Main() {
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
 
 
export default Main;
