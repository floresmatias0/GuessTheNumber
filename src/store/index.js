import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//reducers
import categoryReducer from './reducers/category.reducer';
import breadsReducer from './reducers/breads.reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    breads: breadsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));