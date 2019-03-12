import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Segment, Comment} from 'semantic-ui-react';



const Message = (props) => {
    return(
        <Comment>
            <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>{props.msg}</Comment.Text>
                
            </Comment.Content>
        </Comment>
    )
}

export default Message;