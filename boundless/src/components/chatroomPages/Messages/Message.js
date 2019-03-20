import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Segment, Comment} from 'semantic-ui-react';
import moment from 'moment'




const Message = (props) => {    
    return(
        <Comment>
            <Comment.Content align="left">
                <Comment.Author as='a'>{props.user}</Comment.Author>
                <Comment.Metadata>
                <div>{moment(props.timeStamp.toDate()).fromNow()}</div>
                </Comment.Metadata>
                <Comment.Text align="left">{props.msg}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default Message;