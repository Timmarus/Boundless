import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers ({
    loginReducer: loginReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    
})

export default rootReducer;