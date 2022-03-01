import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from "../../utils/data/database";
import {
    SIGNUP,
    SIGNIN
} from '../types';

export const signInAction = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGNIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
    
            const data = await response.json();
            console.warn(data)
            // let infoErr = {
            //     error: data.error ? data.error.message : "Algo salio mal"
            // }
    
            let info = {
                token: data.idToken,
                userId: data.localId
            }
    
            return dispatch(signIn(!data.error && info));
        }catch(err) {
            console.warn(err)
        }
    }
};

export const signUpAction = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });
            
            const data = await response.json();
            console.warn(data)
            // let infoErr = {
            //     error: data.error ? data.error.message : "Algo salio mal"
            // }
    
            let info = {
                token: data.idToken,
                userId: data.localId
            }
    
            return dispatch(signUp(!data.error && info));
        }catch(err) {
            console.warn(err)
        }
    }
}

export const signIn = data => ({
    type: SIGNIN,
    data
});

export const signUp = data => ({
    type: SIGNUP,
    data
});