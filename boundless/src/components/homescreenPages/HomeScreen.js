import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

//comment
class HomeScreen extends Component {
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

    this.state = {
      courseList: null
    };

    this.removeCourse = this.removeCourse.bind(this);
  }

  removeCourse(courseToRemove) {
    console.log("courseToRemove: " + courseToRemove);
    console.log(this.state.courseList);
    console.log(this.state.courseList);
    console.log(this.state.courseList);

    // if(this.state.courseList) {
    this.setState({
      courseList: this.state.courseList.filter(
        course =>
          // console.log(course);
          course !== courseToRemove
      )
    });

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
        
        {row.map((course, index) => (
          <Col sm="4">
            

            <CourseCard
              key={index*i}
              removeCourse={this.removeCourse.bind(this)}
              course={
                {name: course, id: index*i}
              }
            />
          </Col>
        ))}
      </div>
    ));

    return <div>{content}</div>;
  }

  render() {
    
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }
    
    const {courses} = this.props.profile
    
    if (courses == undefined)
      return <div />

    console.log(courses, "--------");

    return (
      // <Container fluid>

      <div className="container center">
        {this.renderCourseCards(courses, 3)}
        
         {/* <text>Some Text</text> */}
      </div>
      // {/* </Container> */}
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect( mapStateToProps,null)(HomeScreen);
