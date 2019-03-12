import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

class HomeScreen extends Component {
  constructor() {
    super();
    //not hardcoded courses
    const courses = [
      { id: 0, name: "CSC108" },
      { id: 1, name: "CSC148" },
      { id: 2, name: "CSC207" },
      { id: 3, name: "CSC236" },
      { id: 4, name: "CSC209" },
      { id: 5, name: "CSC258" },
      { id: 6, name: "CSC263" }
    ];

    this.state = {
      courseList: courses
    };
  }

  removeCourse(id) {
    this.setState({
      courseList: this.state.courseList.filter(course => course.id !== id)
    });
  }

  renderCourseCards(courseList, numPerRow) {
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
        {row.map(course => (
          <Col sm="4">
            <CourseCard
              key={course.id}
              removeCourse={this.removeCourse.bind(this)}
              course={course}
            />
          </Col>
        ))}
      </div>
    ));

    return <div>{content}</div>;
  }

  render() {
    console.log(this.props.auth);

    if (!this.props.auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      // <Container fluid>

      <div className="container center">
        {this.renderCourseCards(this.state.courseList, 3)}
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

export default connect(
  mapStateToProps,
  null
)(HomeScreen);
