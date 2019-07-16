import { combineReducers } from 'redux';
import cardsData from './cards';
import timer from './timer';

const rootReducer = combineReducers({
    cardsData,
    timer,
});

export default rootReducer;
