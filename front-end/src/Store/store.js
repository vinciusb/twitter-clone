import { createStore, combineReducers } from 'redux';
import TimeLineReducer from './timeline/timeline.reducer';

const rootReducer = combineReducers({
    timeline: TimeLineReducer,
});

const store = createStore(rootReducer);

export default store;
