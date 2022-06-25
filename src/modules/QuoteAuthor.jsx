import React from 'react';
import quotes from './quotes.json';
import colors from './colors.json';

const QuoteAuthor = ({quoteIndex, colorIndex}) => {
    return (
        <div className="quote-author" style={{color: colors[colorIndex]}}>
            <p>{quotes[quoteIndex].author}</p>
        </div>
    );
};

export default QuoteAuthor;