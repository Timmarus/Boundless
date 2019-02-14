import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, } = this.props.course;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
          alt="Card image cap" />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <Button color="danger" onClick={() => this.props.removeCourse(id)}>Leave Chat</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default CourseCard;