import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Segment, Comment} from 'semantic-ui-react';
import moment from 'moment'




const Message = (props) => {
    console.log("+++++++",props.timeStamp, "+++++++");
    const time = props.timeStamp.toDate()
    console.log(moment(props.timeStamp.toDate()).fromNow());
    
    
    return(
        <Comment>
            <Comment.Content>
                <Comment.Author as='a'>{props.user}</Comment.Author>
                <Comment.Metadata>
                <div>{moment(props.timeStamp.toDate()).fromNow()}</div>
                </Comment.Metadata>
                <Comment.Text>{props.msg}</Comment.Text>
                
            </Comment.Content>
        </Comment>
    )
}

export default Message;