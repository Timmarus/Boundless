import * as types from "./actionTypes";

export function updateProfile(profileDetails) {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firebase = getFirebase();
    const firestore = getFirestore();

    var userID = firebase.auth().currentUser.uid;
    
    console.log('userID: ' + userID)
    var docReference = firebase.firestore().collection('users').doc(userID);


    // console.log('docRefernce ID: ' + docReference.id)

    docReference.get().then( (doc) => {


      if(doc) {
        dispatch({type: types.VALID_PROFILE_UPDATE})

        console.log('profileDetails (settingsActions) : ' + JSON.stringify(profileDetails))
        docReference.set(profileDetails, {merge: true})
        console.log('updated')
      } else {
        
        console.log('no document for this user exists')
        dispatch({type: types.INVALID_PROFILE_UPDATE})
      }

    }).catch( error => {
      console.log('here')

      // console.log(error.toString())


      dispatch({type: types.INVALID_PROFILE_UPDATE , payload: error })
    })
  }


    


}

export function coursesUpdate(courses) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Base login process
    dispatch({ type: types.UPDATE_COURSES, payload: courses });
    // const firebase = getFirebase();
  };
}
