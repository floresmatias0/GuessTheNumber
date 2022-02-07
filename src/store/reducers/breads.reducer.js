import { BREADS } from '../../utils/data/breads';
import { 
    SELECT_BREAD,
    FILTERED_BREAD
} from '../types';

const initialState = {
    breads: BREADS,
    filteredBreads: [],
    selected: null
}

const breadsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_BREAD:
            return {
                ...state,
                selected: action.payload
            }
        case FILTERED_BREAD:
            return {
                ...state,
                filteredBreads: action.payload
            }
        default:
            return state;
    }
}

export default breadsReducer;