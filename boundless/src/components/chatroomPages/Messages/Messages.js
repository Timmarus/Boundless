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

  render() {
    const { msg } = this.props;
    if (!msg) {
      return <div />;
    }
    
    var msgList = null;

    if (msg.length == 0)
      msgList = []
    else
      msgList = msg[0].messages
    
    const { user } = this.props;
    return (
      <div style={{ height: "100%", background: "#eeee" }}>
        <React.Fragment>
          <ChatHeader roomID={this.props.roomName} />

          <Segment
            style={{
              display: "flex",
              height: "68%",
              overflowY: "scroll",
              overflowX: "hidden"
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

          <ChatForm roomName={this.props.roomName} user={this.props.user} />
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
    firestore: state.firestore
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) =>  [
    `messages/${props.roomName}`
  ])
)(Messages);

// export default connect(mapStateToProps, null)(Messages)
