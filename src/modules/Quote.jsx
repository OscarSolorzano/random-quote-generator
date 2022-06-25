import React from 'react';
import quotes from './quotes.json';
import colors from './colors.json';

const Quote = ({quoteIndex, colorIndex}) => {
    return (
            <div className='quote-container' style={{color: colors[colorIndex]}}>
                <i className="fa-solid fa-quote-left fa-5x"></i>
                <p className='quote'>{quotes[quoteIndex].quote}</p>
            </div>
    );
};

export default Quote;