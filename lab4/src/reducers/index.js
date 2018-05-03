import { combineReducers } from 'redux';
import { quote } from './quote.reducer';

const rootReducer = combineReducers({
    quote
});

export default rootReducer;