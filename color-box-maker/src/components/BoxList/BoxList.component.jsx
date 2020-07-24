import React, { Component } from 'react';
import NewBoxForm from '../NewBoxForm/NewBoxForm.component';
import Box from '../Box/Box.component';

class BoxList extends Component {

    state = {
        boxes: []
    }

    addBox = (box) => {
        this.setState(currentState => (
            {
                boxes: [...currentState.boxes, box]
            }
        ));
    }

    render() {
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                <NewBoxForm addBox={this.addBox}/>
                {this.state.boxes.map(box => 
                    <Box style={box} key={box.id}/>
                )}
            </div>
        )
    }
}

export default BoxList;