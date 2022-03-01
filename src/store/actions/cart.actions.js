import { URL_API } from '../../utils/data/database';
import {
    ADD_ITEM,
    REMOVE_ITEM,
    CONFIRM_CART
} from '../types';

export const addItemAction = (selected) => {
    return async (dispatch, getState) => {
        try {
            let updateCart = [];
            let itemsCart = getState().cart.items;
    
            let findItem = itemsCart.find(item => item.id === selected.id);
            if(findItem) {
                updateCart = itemsCart.map(item => {
                    if(item.id === selected.id) item.quantity++;
                    return item;
                });
                return await dispatch(removeItem(updateCart));
            }else{
                !selected.quantity ? selected.quantity = 1 : selected.quantity++ ;
                return await dispatch(addItem(selected));
            }
        }catch (err) {
            console.warn(err)
        }
    }
}

export const addItem = item => ({
    type: ADD_ITEM,
    item
})

export const removeItemAction = (id) => {
    return async (dispatch, getState) => {
        try {
            let cart = getState().cart.items;
            const filterCart = cart.filter(item => item.id !== id);
            return await dispatch(removeItem(filterCart))
        }catch(err) {
            console.warn(err)
        }
    }
};

export const removeItem = items => ({
    type: REMOVE_ITEM,
    items
})

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total
                }),
            });
            const result = await response.json();
            console.warn(result);
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            })
        } catch (error) {
            console.warn(error);
        }
    }
}