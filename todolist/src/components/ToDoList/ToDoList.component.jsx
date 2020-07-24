import React, { Component } from 'react';
import './ToDoList.style.css';
import ToDo from '../ToDo/ToDo.component';
import NewToDoForm from '../NewToDoForm/NewToDoForm.component'

class ToDoList extends Component {

    state = {
        notes: []
    }

    addNote = (note) => {
        this.setState(currentState => (
            {
                notes: [...currentState.notes, note]
            }
        ));
    }

    removeNote = (id) => {
        let updatedNotes = this.state.notes.filter(note => note.id != id)
        this.setState({ notes: updatedNotes })
    }

    render() {
        return (
            <div className='ToDoList'>
                <section>
                    <h1>Notes</h1>
                </section>
                <hr/>
                {this.state.notes.map(note => 
                    <ToDo note={note} key={note.id} removeNote={this.removeNote}/>
                )}
                <NewToDoForm addNote={this.addNote}/>
            </div>
        )
    }
}

export default ToDoList;