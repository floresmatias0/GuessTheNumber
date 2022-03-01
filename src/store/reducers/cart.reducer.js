import { CART } from "../../utils/data/cart";

const initialState = {
    items: [],
    total: 0
}

const sumTotal = (items) => items.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.item],
                total: sumTotal([...state.items, action.item])
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: action.items,
                total: sumTotal(action.items)
            }
        default:
            return state;
    }
}

export default cartReducer;