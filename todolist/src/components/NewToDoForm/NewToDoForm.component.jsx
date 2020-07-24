import React, { Component } from 'react';
import './NewToDoForm.styles.css'
import uuid from 'uuid/dist/v4';

class NewToDoForm extends Component {

    state = {
        text: '',
        id: uuid()
    }

    inputChange = (e) => {

        e.preventDefault();

        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    handleAddNote = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({text: '', id: uuid()})
    }

    render() {
        return (
            <div className='NewToDoForm'>
                <form onSubmit={this.handleAddNote}>
                    <input type="text" name="text" id="note" placeholder="Add a task" 
                    onChange={this.inputChange} value={this.state.text}/>
                    <button>
                        <i className="fas fa-plus"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default NewToDoForm;