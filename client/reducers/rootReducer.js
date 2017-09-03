import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from './tasks';
import user from './user';

export default combineReducers({
    tasks,
    user,
    routing
});