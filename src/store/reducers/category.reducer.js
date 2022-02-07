import { CATEGORIES } from '../../utils/data/categories';
import { SELECT_CATEGORY } from '../types';

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_CATEGORY:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer;