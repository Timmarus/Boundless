import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Link } from "react-router-dom";


class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, } = this.props.course;

    let key = this.props.key;

    let imgSrc = "https://placeholdit.imgix.net/~text?txtsize=33&txt="+ id + "&w=318&h=180" 
    return (
      <div style={{margin: 25}}>
          <Card>
          {/* // pass the room ID that we clicked on to the chatroom route */}
          <Link to={{ pathname: "/chatroom", state: {roomID: id}}} >
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
            alt="Card image cap" />
          </Link>
          <CardBlock>
            <CardTitle>{"id: " + id} </CardTitle>
            <Button color="danger" onClick={() => this.props.removeCourse(id)}>Leave Chat</Button>
          </CardBlock>
        </Card>    
      
      </div>

    )
  }
}

export default CourseCard;