import React, { Component } from 'react';

class Box extends Component {

    render() {
        return (
            <div>
                <div style={{
                    height: this.props.style.height,
                    width: this.props.style.width,
                    backgroundColor: this.props.style.bgcolor
                }}>
                </div>
                {/* <button type="submit">Remove The Box!</button> */}
            </div>
        )
    }
}

export default Box;