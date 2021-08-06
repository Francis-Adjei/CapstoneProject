import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from "./quote.actionType";
import axios from "axios";

export const loadData = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let dataUrl = 'https://api.quotable.io/random'
            let response = await axios.get(dataUrl)
            dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})
        }
        catch(error){
            dispatch({type: LOAD_DATA_FAILURE, payload: error})
        }
    }
}