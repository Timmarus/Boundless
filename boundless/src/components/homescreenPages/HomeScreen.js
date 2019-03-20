import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import * as actions from "../../actions/settingsActions";
import Messages from "../chatroomPages/Messages/Messages";
import MetaPanel from "../chatroomPages/MetaPanel/MetaPanel";
import ColorPanel from "../chatroomPages/ColorPanel/ColorPanel";
import "../../index.css";
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

  renderCourseCards(courseList, numPerRow) {
    

    const content2 = courseList.map((channel, i) => (
      <div style={{ display: "flex", flexDirection: "row" }} key={i}>
        {/* // map courses in the row as columns */}
        {console.log(i)}
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

    if (courses == undefined) return <div />;
    if (!courses.includes("room1")) {
      courses.unshift("room1");
    }

    
    return (
      // <Container fluid>
      <div className="container-fluid" style={{ height: "90%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-2"
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
            className="col-md-8"
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
            <MetaPanel />
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
  };
};

export default connect(
  mapStateToProps,
  actions
)(HomeScreen);
