import React, { Component } from 'react';
import './Coin.styles.css';
import head from './head.png';
import tail from './tail.png';

class Coin extends Component {

    render() {
        return(
            <div>
                <img className='Coin'
                    src={this.props.isHead ? head : tail} 
                    alt={this.props.isHead ? 'head' : 'tail'}
                />
            </div>
        )
    }
}

export default Coin;