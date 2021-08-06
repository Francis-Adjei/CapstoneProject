import {quoteReducer, QUOTE_KEY} from './quoteRedux/quote.reducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({
    [QUOTE_KEY]: quoteReducer
})

export {rootReducer}