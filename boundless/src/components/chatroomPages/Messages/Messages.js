import React from 'react';

import {Segment, Comment} from 'semantic-ui-react';

import ChatHeader from './ChatHeader'
import ChatForm from './ChatForm'

class Messages extends React.Component {
    render () {
        return (
            <div style={{width: "80%", background: "#eeee",}}> 
            
                <React.Fragment>

                    <ChatHeader roomID={this.props.roomID}/>
  
                     <Segment style={{display: "flex", height: "75%", margin: 5}} >
                         <Comment.Group className="messages">
                        
                             Messages Here
                         </Comment.Group>

                     </Segment>

                    <ChatForm/>


                </React.Fragment>
            
            
            
            </div>
        )
    }
}

export default Messages;