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

import { Link } from "react-router-dom";

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
      <div style={{ margin: 25 }}>
        <Card>
          {/* // pass the room ID that we clicked on to the chatroom route */}
          <Link to={{ pathname: "/chatroom", state: { roomID: id, roomName: name } }}>
            <CardImg
              top
              width="100%"
              src={ "https://placeholdit.imgix.net/~text?txtsize=33&txt=" +
              name +
              "&w=318&h=180"}
              alt="Card image cap"
            />
          </Link>
          <CardBody>
			<CardText>
			<div className="row">
			<div className="col-md-5">
			<Link to={{pathname: "/chatroom", state: { roomID: id, roomName: name } }}>
			<Button color="success">
				Enter
			</Button>
			</Link>
			</div>
			<div className="col-md-5 offset-md-2">
            <Button color="danger" onClick={() => this.props.removeCourse(name)}>
              Leave
            </Button>
			</div>
			</div>
			</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CourseCard;
