import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, } = this.props.course;

    let key = this.props.key;

    let imgSrc = "https://placeholdit.imgix.net/~text?txtsize=33&txt="+ id + "&w=318&h=180" 
    return (
      <div >
        <Card>
          <CardImg top width="100%" src= {imgSrc}
          alt="Card image cap" />
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