import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import * as actions from '../../actions/settingsActions'
import Messages from '../chatroomPages/Messages/Messages';
import MetaPanel from '../chatroomPages/MetaPanel/MetaPanel';
import ColorPanel from '../chatroomPages/ColorPanel/ColorPanel';
import '../../index.css'
//comment
class HomeScreen extends Component {
    state = {
      courseList: null,
      curChat: "room1"
    };

  constructor(props) {
    super(props);


    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   year,
    //   university,
    //   program,
    //   courses
    // } = this.props.profile;

    // console.log("profile: " + JSON.stringify(this.props.profile));

    this.removeCourse = this.removeCourse.bind(this);
  }
  
  setChat(roomID) {
	  this.setState({curChat: roomID}, function() {
      console.log("Switching to", this.state.curChat);
    });
    
  }
  componentDidMount() {
    document.body.style.height = "100%"
    document.getElementById("root").style.height = "100%"
    document.getElementsByClassName("App")[0].style.height = "100%"
  }
  removeCourse(courseToRemove) {
    
    // updateProfile
    const { courses } = this.props.profile
    var newCourses = courses
    var cc = newCourses.filter(function (val, index,arr){
      return val !== courseToRemove
    })

    console.log(cc);
    var newDetails = this.props.profile
    newDetails.courses = cc 
    console.log(newDetails);

    this.props.updateProfile(newDetails)
       
    // console.log("courseToRemove: " + courseToRemove);
    
    // // if(this.state.courseList) {
    // this.setState({
    //   courseList: this.state.courseList.filter(
    //     course =>
    //       // console.log(course);
    //       course !== courseToRemove
    //   )
    // });

    // }
  }

  renderCourseCards(courseList, numPerRow) {
    console.log("courseList: " + JSON.stringify(courseList));
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(courseList.length / numPerRow))];
    // chunk the products into the array of rows
    const courseRows = rows.map((row, i) =>
      courseList.slice(i * numPerRow, i * numPerRow + numPerRow)
    );
    // map the rows as div.row
    const content = courseRows.map((row, i) => (
      <div style={{ display: "flex", flexDirection: "row" }} key={i}>
        {/* // map courses in the row as columns */}
        <ul className="list-group">
        {row.map((course, index) => (
            
			<li className="list-group-item" style={{ display: "inline-block", float: "left" }}>
            <CourseCard
              key={index*i}
              removeCourse={this.removeCourse.bind(this)}
			  setChat={this.setChat.bind(this)}
              course={
                {name: course, id: index*i}
              }
            />
			</li>
        ))}
		</ul>
      </div>
    ));

    return <div><ul className="list-group"><li className="list-group-item" style={{ display: "inline-block", float: "left" }}>
            <CourseCard
              key="room1"
              setChat={this.setChat.bind(this)}
              course={
                {name: "room1", id: "room1"}
              }
            /></li></ul>
{content}</div>;
  }

  render() {
    
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }
	console.log(this.props);
  console.log("State", this.state);
    const {courses} = this.props.profile
    
    if (courses == undefined)
      return <div />

    console.log(this.props, "--------");

    return (
      // <Container fluid>
      <div className="container-fluid" style={{height: "100%"}}>
		<div className="row" style={{height: "100%"}}>
		<div className="col-md-2" style={{height: "100%", overflow: "scroll"}} >
		{this.renderCourseCards(courses, 3)}
		</div>
		<div className="col-md-6" style={{height: "60%"}}>
        <Messages key={this.state.curChat} user={this.props.profile} roomID={this.state.curChat} roomName={this.state.curChat}/>
		</div>
		<div className="col-md-2" style={{width: "100%"}}>
        <MetaPanel/>
		</div>
		</div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect( mapStateToProps,actions)(HomeScreen);
