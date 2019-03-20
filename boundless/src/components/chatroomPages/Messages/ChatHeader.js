import React from 'react';

import { Header, Segment, Icon, Input } from 'semantic-ui-react'

class ChatHeader extends React.Component {
    render() {
	console.log("RoomID", this.props.roomID)
        return (
            
            <Segment clearing style={{background: "#eeee", display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: "center"}}>

                {/* Course Room Title Here */}
                <Header fluid="true" as="h2" style={{marginBottom: 0, }}>
                    {/* <span> */}

                        Course ID: {this.props.roomID}
					
                    {/* </span> */}

                    
                </Header>

                {/* <Header > */}
                    <Input floated ="right"
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search"

                        // style={{backgroundColor: "blue"}}
                    />
                {/* </Header> */}
            </Segment>

        )

    }
}

export default ChatHeader;