import { SIGNUP, SIGNIN } from "../types";

const initialState = {
    token: null,
    userId: null,
    error: ''
}

const AuthReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN:
            return {
                ...state,
                token: action.data.token ? action.data.token : null,
                userId: action.data.localId ? action.data.localId : null,
                error: action.data.error ? action.data.error : ''
            }
        case SIGNUP:
            return {
                ...state,
                token: action.data.token ? action.data.token : null,
                userId: action.data.localId ? action.data.localId : null,
                error: action.data.error ? action.data.error : ''
            }
        default:
            return state;
    }
}


export default AuthReducer;