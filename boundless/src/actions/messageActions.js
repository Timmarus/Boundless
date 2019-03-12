import * as types from './actionTypes';

export function newMessage (msg) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //Base login process
        const db = getFirestore()

        const msgs = db.collection('messages').doc('room1')
        msgs.get().then(function(doc){
            var existing = doc.data()['message']
            console.log({existing});
            existing.push("newMSg")
            const newData = {
              message: existing
            }
            
            
            msgs.set(newData).then(function(){
              console.log("newMessage added");
              
            })
        })

        // db.collection("messages").doc('room1')
        //     .onSnapshot(function(snapshot) {
        //         console.log(snapshot);
                
        //     });


      dispatch({ type: types.NEW_MESSAGE, payload: msg})
    };
  }