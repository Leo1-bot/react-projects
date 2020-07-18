import React, {Component} from 'react';
import './Random.styles.css';

class Random extends Component {
    state = {
        num : 0,
        btnText : 'Random'
    }
    handleClick = (e) => {
        this.setState({ 
            num: Math.floor(Math.random() * 10)
        });
    }
    render() {
        return (
            <div>
                <h1>Number is : { this.state.num }</h1>
                { this.state.num === 7 
                ?   <h3>YOU WIN!</h3> 
                :   <button onClick = { this.handleClick } className = "Random">
                        { this.state.btnText }
                    </button>}
            </div>
        )
    }
}

export default Random