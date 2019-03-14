import * as types from './actionTypes';

export function newMessage (msg) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      //Base login process
        const db = getFirestore()

        const msgs = db.collection('messages').doc('room1')
        msgs.get().then(function(doc){
            var existing = doc.data()['messages']
            console.log({existing});
            
            //msg,user, postedAt
            var newMessage = {
              msg: msg.message,
              user: msg.user,
              postedAt: new Date()
            }
            existing.push(newMessage)
            console.log(existing);
            
            const newData = {
              messages: existing
            }
            
            
            msgs.set(newData).then(function(){
              console.log("newMessage added");
              
            })
        })


      dispatch({ type: types.NEW_MESSAGE, payload: msg})
    };
  }