import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  settingsReducer: settingsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
