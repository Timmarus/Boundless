import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CourseCard from './CourseCard';
import { Container, Row, Col } from "reactstrap";

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
          course: [
            {
              id: 1,
              name: "Course 1"
            },
            {
              id: 2,
              name: "Course 2"
            },
            {
              id: 3,
              name: "Course 3"
            },
            {
              id: 4,
              name: "Course 4"
            },
            {
                id: 3,
                name: "Course 5"
              },
              {
                id: 3,
                name: "Course 6"
              }
          ]
        }
      }
    
      removeCourse(id) {
        this.setState({ course: this.state.course.filter(course => course.id !== id)});
      }
    
      render () {
        let courseCards = this.state.course.map(course => {
          return (
            <Col sm="4">
              <CourseCard key={course.id} removeCourse={this.removeCourse.bind(this)} course={course} />
            </Col>
          )
        })
        return (
          <Container fluid>
            <Row>
              {courseCards}
            </Row>
          </Container>
        )
      }
    }
    
export default HomeScreen;
