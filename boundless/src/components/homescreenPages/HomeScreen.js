import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Container, Row, Col } from "reactstrap";
import * as actions from "../../actions/settingsActions";
import Messages from "../chatroomPages/Messages/Messages";
import MetaPanel from "../chatroomPages/MetaPanel/MetaPanel";
import ColorPanel from "../chatroomPages/ColorPanel/ColorPanel";
import "../../index.css";
import { updateLastSeen } from "../../actions/chatActions";

//comment
class HomeScreen extends Component {
  state = {
    courseList: null,
    curChat: 0
  };

  constructor(props) {
    super(props);
    this.removeCourse = this.removeCourse.bind(this);
  }

  setChat(roomID) {
    this.setState({ curChat: roomID }, function() {
      console.log("Switching to", this.state.curChat);
    });
  }
  componentDidMount() {
    document.body.style.height = "100%";
    document.getElementById("root").style.height = "100%";
    document.getElementsByClassName("App")[0].style.height = "100%";
    //this.props.updateLastSeen(this.props.auth.uid);
  }

  removeCourse(courseToRemove) {
    // updateProfile
    const { courses } = this.props.profile;
    var newCourses = courses;
    var cc = newCourses.filter(function(val, index, arr) {
      return val !== courseToRemove;
    });

    console.log(cc);
    var newDetails = this.props.profile;
    newDetails.courses = cc;
    console.log(newDetails);

    this.props.updateProfile(newDetails);

  }

  getOnline(users) {
    var online = []
    users.forEach(function(elem) {
      if (Date.now() - elem['lastSeen'] < 900000) {
        online.push(elem.firstName);
      }
    });
    return online;
  }

  renderCourseCards(courseList, numPerRow) {
    

    const content2 = courseList.map((channel, i) => (
      <div style={{ display: "flex", flexDirection: "row" }} key={i}>
        {/* // map courses in the row as columns */}
        <ul className="list-group">
            <li
              className="list-group-item"
              style={{ display: "inline-block", float: "left" }}
            >
              <CourseCard
                key={i}
                removeCourse={this.removeCourse.bind(this)}
                setChat={this.setChat.bind(this)}
                course={{ name: channel, id: i }}
              />
            </li>
        
        </ul>
      </div>
      
    ))


    return (
      <div style={{ transform: "scaleX(-1)" }}>
        {content2}
      </div>
    );
  }

  render() {
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }
    var { courses } = this.props.profile;
    console.log("Props:", this.props);
    if (courses == undefined) return <div />;
    if (!courses.includes("room1")) {
      courses.unshift("room1");
    }
    var online = []
    if (this.props.auth.isLoaded) {
      this.props.updateLastSeen(this.props.auth.uid);
      online = this.getOnline(this.props.users);
    }
    
    return (
      // <Container fluid>
      <div className="container-fluid" style={{ height: "90%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-2 card"
            style={{
              height: "100%",
              overflowY: "scroll",
              overflowX: "hidden",
              paddingRight: "0px",
              paddingLeft: "0px",
              transform: "scaleX(-1)"
            }}
          >
            {this.renderCourseCards(courses, 3)}
          </div>

          <div
            className="col-md-8 card"
            style={{
              height: "100%",
              paddingLeft: "0px",
              paddingRight: "0px",
              scrollbarWidth: "none"
            }}
          >
            <Messages
              key={courses[this.state.curChat]}
              user={this.props.profile}
              roomID={courses[this.state.curChat]}
              roomName={courses[this.state.curChat]}
            />
          </div>


          <div className="card col-md-2" style={{ width: "100%" }}>
            <MetaPanel online={online}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users
  };
};

export default compose(
connect(
  mapStateToProps,
  {actions, updateLastSeen},
),
  firestoreConnect((props) =>  [
    `users`
  ])
)(HomeScreen);
