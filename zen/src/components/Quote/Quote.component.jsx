import React, { Component } from 'react';
import axios from 'axios';
import './Quote.styles.css';

class Quote extends Component {

    state = {
        quote: { text: '', author: 'Anonymous' }
    }

    componentDidMount() {
        let randomNum = Math.floor(Math.random() * 1643);
        axios.get('https://type.fit/api/quotes').then(res => {
            this.setState({ quote: res.data[randomNum] })
        });
        setInterval(() => {
            let randomNum = Math.floor(Math.random() * 1643);
            axios.get('https://type.fit/api/quotes').then(res => {
                this.setState({ quote: res.data[randomNum] })
            });
        }, 10000);
    }

    render() {
        return (
            <div className='Quote'>
                <p className='text'>{this.state.quote.text}</p>
                <p className='author'>{this.state.quote.author}</p>
            </div>
        )
    }
}

export default Quote;