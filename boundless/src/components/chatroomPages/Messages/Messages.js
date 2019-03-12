import React from 'react';
import { connect } from 'react-redux'
import {Segment, Comment} from 'semantic-ui-react';

import ChatHeader from './ChatHeader'
import ChatForm from './ChatForm'
import Message from './Message'



//  * Scrum
//  *  Given some senario what will happen
//  * Software design
//  * Why a userstory is good or bad
//  * crc design
//  * design pattern
//  *  no drawing
//  * enterprise patterns
//  * solid principles
//  * design principles
//  * 


class Messages extends React.Component {
    render () {
        return (
            <div style={{width: "80%", background: "#eeee",}}> 
            
                <React.Fragment>

                    <ChatHeader roomID={this.props.roomID}/>
  
                     <Segment style={{display: "flex", height: "75%", margin: 5}} >
                         <Comment.Group className="messages">

                            <Message msg={this.props.message} />
                            
                         </Comment.Group>

                     </Segment>

                    <ChatForm/>


                </React.Fragment>
            
            
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.messageReducer.msg

    }
    
}

export default connect(mapStateToProps, null)(Messages)
