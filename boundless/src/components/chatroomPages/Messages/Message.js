import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Segment, Comment, Image} from 'semantic-ui-react';
import moment from 'moment'




const Message = (props) => { 
    const {msg} = props
    let imgSrc = ''
    if (msg.includes('IMaGe')){
        imgSrc = msg.split(' ')[1]
    }
    
    return(
        <Comment>
            <Comment.Content align="left">
                <Comment.Author as='a'>{props.user}</Comment.Author>
                <Comment.Metadata>
                <div>{moment(props.timeStamp.toDate()).fromNow()}</div>
                </Comment.Metadata>
                {imgSrc.length >0?
                    <a target="_blank" href={imgSrc} > <Image alt="" src={imgSrc} class="messageImg" size='medium' /> </a>:
                    <Comment.Text align="left">{props.msg}</Comment.Text>
                }
                
            </Comment.Content>
        </Comment>
    )
}

export default Message;