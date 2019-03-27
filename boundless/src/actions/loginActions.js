import * as types from './actionTypes';

export function authenticateLogin(login) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //Base login process
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
          login.email, login.password
        ).then (() => {
            
            dispatch({ type: types.VALID_LOGIN })
        }).catch((err) => {
            dispatch({type: types.INVALID_LOGIN , payload: err})
        })

    };
  }

export function signOut() {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => {
            dispatch({ type: types.SIGN_OUT })
        })
        
    }
}

export function signUpUser(userInfo) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        firebase.auth().createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                university: userInfo.university,
                year: userInfo.year,
                program: userInfo.program,
                courses: userInfo.courses,
                lastSeen: 0

            })
        }).then(() => {
           dispatch({ type: types.VALID_SIGNUP }) 
        }).catch(error => {
            dispatch({type: types.INVALID_SIGNUP , payload: error })
        })
    }
}
