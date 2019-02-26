import React from 'react';

import { Segment, Input, Button } from 'semantic-ui-react';

class ChatForm extends React.Component {
    render() {
        return (
            
            <Segment className="chatForm" style={{display: "flex", flexDirection: "row", margin: 5}}>

                <Input
                    fluid
                    name="chatMessage"
                    style={{ width: "80%", margin: '0.5em'}}
                    label={<Button icon={'add'} /> }
                    labelPosition="left"
                    placeholder="Enter your message"
                />


                <Button
                    primary
                    // color="grey"
                    content="Send"
                    labelPosition="right"
                    icon="edit"
                />
                {/* <Button.Group icon widths="2">


                
                
                </Button.Group> */}
        
            </Segment>


        )
    }
}

export default ChatForm;