import React, { Component } from 'react';
import Ball from '../Ball/Ball.component';
import './Lottery.styles.css';

class Lottery extends Component {

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    state = {
        nums: Array.from( {length: this.props.numBalls} )
    }

    generate = (e) => {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                n => Math.round(Math.random() * this.props.maxNum) + 1
            )
        }));
    }

    render() {
        return (
            <section className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n} />)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </section>
        )
    }
}

export default Lottery;