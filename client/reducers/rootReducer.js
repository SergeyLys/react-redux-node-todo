import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from './tasks';
import user from './user';
// import flashMessage from './flashMessage';

export default combineReducers({
    user,
    tasks
    // flashMessage,
    // routing
});