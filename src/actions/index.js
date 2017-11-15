import axios from 'axios';
import { FETCH_USER } from './types';


//redux-thunk will call the function with dispatch
/* export const fetchUser = () => {
    return function(dispatch) {
        axios.get('/api/current_user')
            .then((res) => {
                dispatch({
                    type: FETCH_USER,
                    payload: res
                });
            }); 
    }    
}; */

//redux thunk when sees a function is returned it calls the function with dispatch
export const fetchUser = () => async dispatch => {

    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
    
};
