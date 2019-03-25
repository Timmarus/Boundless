import * as types from './actionTypes';


export function updateLastSeen (userID) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
    	var db = getFirestore();
    	var user = db.collection("users").doc(userID);
        user.get().then(function(doc){
        	var lastTime = doc.data()['lastSeen']
        	var time = Date.now();
        	if (lastTime) {
	        	if (time - lastTime >= 5000) {
			    	user.update({lastSeen: time});
			    	dispatch({ type: types.UPDATE_LAST_SEEN, payload: time})
		    	}
        	} else {
        		user.update({lastSeen: time})
			    dispatch({ type: types.UPDATE_LAST_SEEN, payload: time})
        	}
	    })
    };
}

export function searchMsgs (search) {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({type: types.SEARCH_MESSAGES, payload: search })
	}
}

