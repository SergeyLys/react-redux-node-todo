import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import { routes } from './routes';
// import {Router, browserHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import configRoutes from './routes';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*{configRoutes(store)}*/}
            {routes}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);