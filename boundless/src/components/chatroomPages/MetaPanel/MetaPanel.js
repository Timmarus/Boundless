import React from 'react';

import { Header, Segment, Icon, Input } from 'semantic-ui-react'


const MetaPanel = (props) => {
    // console.log(props.online);
    var length = props.online.length;
    const content = props.online.map((user, i) => (
      <div style={{ display: "flex", flexDirection: "row" }} key={i}>
        {/* // map courses in the row as columns */}
        <p>{user}</p>
      </div>
      
    ))
        return (
            // <div> Metapanel 
                
            <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
<               Header fluid as="h2" floated="left" style={{display: "flex", flexDirection: "column"}}>
                    {/* Course Name here */}
                    User List Here
                    <Header.Subheader>
                    # Users in this room: {length}
                    </Header.Subheader>
                </Header>
                {content}
            </div>

        )
    }


export default MetaPanel;