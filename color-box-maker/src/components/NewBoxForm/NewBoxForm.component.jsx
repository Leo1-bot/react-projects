import React, { Component } from 'react';

class NewBoxForm extends Component {

    state = {
        height: 0,
        width: 0,
        bgcolor: ''
    }

    inputChange = (e) => {

        e.preventDefault();

        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    handleAddBox = (e) => {
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({height: 0, width: 0, bgcolor: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleAddBox}>
                <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="height">Height: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="height"
                                    id="height"
                                    value={this.state.height}
                                    onChange={this.inputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="width">Width: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="width"
                                    id="width"
                                    value={this.state.width}
                                    onChange={this.inputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="bgcolor">Background Color: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="bgcolor"
                                    id="bgcolor"
                                    value={this.state.bgcolor}
                                    onChange={this.inputChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" style={{marginTop: '20px', cursor: 'pointer'}}>
                    Add a new box!
                </button>
            </form>
        )
    }
}
export default NewBoxForm;