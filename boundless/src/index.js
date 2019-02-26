import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import 'semantic-ui-css/semantic.min.css'

//This is where we will register the store i.e model

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
