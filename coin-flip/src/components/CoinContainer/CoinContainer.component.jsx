import React, { Component } from 'react';
import Coin from '../Coin/Coin.component';
import Button from '../Button/Button.component';

class CoinContainer extends Component {

    state = {
        flip: 0,
        head: 0,
        tail: 0,
        isHead: true
    }

    flip = () => {
        const headortail = !!(Math.round(Math.random()));
        this.setState(currentState => ({
            flip: currentState.flip + 1,
            isHead: headortail,
            head: currentState.head + (headortail ? 1 : 0),
            tail: currentState.tail + (!headortail ? 1 : 0)
        }));
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                <Coin isHead={this.state.isHead}/>
                <Button clickEvent={this.flip}/>
                <p>
                    Out of {this.state.flip} flips, 
                    there have been {this.state.head} heads 
                    and {this.state.tail} tails.
                </p>
            </div>
        )
    }
}

export default CoinContainer;