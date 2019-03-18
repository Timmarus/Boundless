import React from 'react';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import firebase from 'firebase/app'
import  'firebase/database'
import {Segment, Comment} from 'semantic-ui-react';

import ChatHeader from './ChatHeader'
import ChatForm from './ChatForm'
import Message from './Message'



//  * Scrum
//  *  Given some senario what will happen
//  * Software design
//  * Why a userstory is good or bad
//  * crc design
//  * design pattern
//  *  no drawing
//  * enterprise patterns
//  * solid principles
//  * design principles
//  * 


class Messages extends React.Component {

    makeAMessage (msg, index){
        return(
            <Message msg={msg} key={index} />
        )
    }

componentDidMount() {
    this.scrollToBottom();
}

componentDidUpdate() {
    this.scrollToBottom();
}

scrollToBottom() {
    if (this.messagesEnd) {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
}
  }


    render () {

        const {msg} = this.props
        console.log(this.props);

        if (!msg) {
            return <div />
        }
        // console.log(msg[0]);
        console.log(msg[0].messages);
        const msgList = msg[0].messages
        console.log("---------",msgList, "-------");
        
        const {user} = this.props
    
        
        
    //    const messages = map[0].message
       
        return (
            <div style={{height: "60%", background: "#eeee",}}> 
            
                <React.Fragment>

                    <ChatHeader roomID={this.props.roomName}/>
  
                     <Segment style={{display: "flex", height: "75%", overflow: "scroll"}} >
                         <Comment.Group className="messages">
                            
                            {msgList.map((item, i) => (
                                <Message 
                                    user={item.user}
                                    msg={item.msg}
                                    timeStamp={item.postedAt}
                                    key={i} />
                                ))}
                         </Comment.Group>
                        <div ref={this.messagesEnd} />
                     </Segment>

                    <ChatForm user={user}/>


                </React.Fragment>
            
            
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        msg: state.firestore.ordered.messages,
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        `messages/room1`
        
    ])
)(Messages)

// export default connect(mapStateToProps, null)(Messages)
