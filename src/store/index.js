import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//reducers
import categoryReducer from './reducers/category.reducer';
import breadsReducer from './reducers/breads.reducer';
import cartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/orders.reducer';
import AuthReducer from './reducers/auth.reducers';

const rootReducer = combineReducers({
    categories: categoryReducer,
    breads: breadsReducer,
    cart: cartReducer,
    orders: OrderReducer,
    auth: AuthReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));