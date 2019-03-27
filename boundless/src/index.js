import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import dbConfig from './config/dbConfig';

import 'semantic-ui-css/semantic.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)


//This is where we will register the store i.e model

const store = createStore(
    rootReducer,
    //thunk is a middleware
    //We use "compose" which combines multiple store enhancers
    compose( 
    applyMiddleware(thunk.withExtraArgument({
        getFirebase,
        getFirestore})),
    reduxFirestore(dbConfig), //store enhancers
    reactReduxFirebase(dbConfig,{
        useFirestoreForProfile: true,
        userProfile: 'users',
        attactAuthIsReady: true,
    }), //stor enhancers,
    //This basically allows the actions to connect to the database
    //directly. So now in the actions we can make use of those enhancers
    //and get/add info to the database
    )
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
