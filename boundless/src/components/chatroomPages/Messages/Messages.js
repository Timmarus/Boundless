import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import firebase from 'firebase/app'
import "firebase/database";
import { Segment, Comment } from "semantic-ui-react";

import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import Message from "./Message";
import * as actions from '../../../actions/chatActions'

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
  constructor(props) {
    super(props);
  }

  makeAMessage(msg, index) {
    return <Message msg={msg} key={index} />;
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }
  }

  resetSearchConfig = () => {

    const text = {msgs: [] ,searchEnable: 0}
    this.props.searchMsgs(text)

  }

  render() {


    const { msg, search } = this.props;
    if (!msg) {
      return <div />;
    }
    var msgList = null;
    if (search.searchEnable == 0){
      if (msg.length == 0)
        msgList = []
      else
        msgList = msg[0].messages
    
    }else{
      msgList = search.searchText
    }

    const { user } = this.props;
    return (
      <div style={{ height: "100%", background: "#eeee" }}>
        <React.Fragment>

          <ChatHeader messages={msgList}  roomID={this.props.roomName} />
          
          <Segment
            style={{
              display: "flex",
              height: "68%",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <Comment.Group className="messages">
              {msgList.map((item, i) => (
                <Message
                  user={item.user}
                  msg={item.msg}
                  timeStamp={item.postedAt}
                  key={i}
                />
              ))}
              <div
                ref={el => {
                  this.messagesEnd = el;
                }}
              />
            </Comment.Group>
          </Segment>

          {search.searchEnable == 0? 
            <ChatForm search={search.searchEnable} roomName={this.props.roomName} user={this.props.user} />
            :
            <Segment className=" center chatForm" style={{display: "flex", flexDirection: "row", margin: 5}}>
              <a 
                onClick={this.resetSearchConfig}
                style={{ width: "100%", margin: '0.5em'}} 
                className="waves-effect waves-light btn-large red"><i className="material-icons left">close</i>Cancel Search</a>

            </Segment>
          }

        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg: state.firestore.ordered.messages,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    firestore: state.firestore,
    search: state.chatReducer
  };
};

export default compose(
  connect(mapStateToProps, actions),
  firestoreConnect((props) =>  [
    `messages/${props.roomName}`
  ])
)(Messages);

// export default connect(mapStateToProps, null)(Messages)
