import * as types from "./actionTypes";

export function updateSettings(settings) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Base login process
    dispatch({ type: types.UPDATE_SETTINGS, payload: settings });
    // const firebase = getFirebase();
  };
}
