import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

var colors = [
  "ff0000",
  "00ff00",
  "0000ff",
  "ffffff"
]

class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { id, name } = this.props.course;
    // console.log(this.props.course, '99999999');
    
    let key = this.props.key;

    let imgSrc =
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=" +
      id +
      "&w=318&h=180";
    return (
      <div style={{ }}>
        <Card>
          {/* // pass the room ID that we clicked on to the chatroom route */}
		  <Link to="#">
            <CardImg
              top
              width="100%"
              src={ "https://placeholdit.imgix.net/~text?txtsize=33&txt=" +
              name +
              "&w=318&h=180&bg=ffffff"}
              alt="Card image cap"
			  onClick={() => this.props.setChat(name)}
            />
			</Link>
          <Link style={{ position:'absolute', top:8, right:16}} to={{pathname: ""}} onClick={() => this.props.removeCourse(name)}>
          <FontAwesomeIcon color="red" icon="trash" /></Link>
        </Card>
      </div>
    );
  }
}

export default CourseCard;
