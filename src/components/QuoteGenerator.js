import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../Redux/quoteRedux/quote.actions'
import { QUOTE_KEY } from '../Redux/quoteRedux/quote.reducer';


const QuoteGenerator = () =>{
    // initialize dispatch
     let dispatch = useDispatch()

     // handle btn
     let clickBtn = () =>{
         dispatch(loadData()) 
     }

     // view data from store

     let viewQuote = useSelector((state) =>{
         return state[QUOTE_KEY]
     })

    return (
        <div className='QuoteGenerator'>
            <div className='quote'>
                <h2>{viewQuote.data.content}</h2>
                <small>-{viewQuote.data.author}-</small>
            </div><br/>
            <button className='btn' onClick={clickBtn}>Generate New Quote</button>
        </div>
    );
}
   

export default QuoteGenerator;
