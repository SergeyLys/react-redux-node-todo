import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from './tasks';

export default combineReducers({
    tasks,
    routing
});