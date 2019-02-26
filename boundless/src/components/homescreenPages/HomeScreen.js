import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from "./CourseCard";
import { Container, Row, Col } from "reactstrap";

class HomeScreen extends Component {
  constructor() {
    super();

    // fill with real data later
    const sampleCourseList = [];

    for (var i = 1; i < 7; i++) {
      sampleCourseList.push({ id: i, name: "Course " + i });
    }

    this.state = {
      courseList: sampleCourseList
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
    return (
      <Container fluid>
        {this.renderCourseCards(this.state.courseList, 3)}
      </Container>
    );
  }
}

export default HomeScreen;
