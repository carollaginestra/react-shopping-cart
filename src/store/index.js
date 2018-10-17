import { createStore, combineReducers } from 'redux';

// Reducers
import cart from './cart/reducers';

export default createStore(combineReducers({
    cart,
}))