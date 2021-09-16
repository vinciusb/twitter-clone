import { createStore, combineReducers } from 'redux';
import TimelineReducer from './timeline/timeline.reducer';
import UserReducer from './user/user.reducer';

const rootReducer = combineReducers({
    timeline: TimelineReducer,
    user: UserReducer,
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
