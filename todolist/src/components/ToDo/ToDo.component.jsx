import React, { Component } from 'react';
import './ToDo.styles.css';

class ToDo extends Component {

    handleRemoveNote = (e) => {
        e.preventDefault();
        this.props.removeNote(this.props.note.id);
    }

    render() {
        return (
            <div className='ToDo'>
                <ul>
                    <li>
                        <div className='ToDoContent'>
                            {this.props.note.text}
                        </div>
                        <span>
                            <i className="far fa-edit"></i>
                        </span>
                        <span onClick={this.handleRemoveNote}>
                            <i className="far fa-trash-alt"></i>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ToDo;