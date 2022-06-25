import React from 'react';
import { useState } from 'react';
import Quote from './Quote';
import QuoteAuthor from './QuoteAuthor';
import RandomizerBtn from './RandomizerBtn';
import quotes from  './quotes.json'
import colors from './colors.json'

const QuoteBox = () => {

    const randomQuoteIndex = Math.floor(Math.random()*quotes.length);
    const [quoteIndex, setQuoteIndex] = useState(randomQuoteIndex);

    const randomColorIndex = Math.floor(Math.random()*colors.length);
    const [colorIndex, setColorIndex] = useState(randomColorIndex);

    const randomizeQuoteNColor = () => {
        const randomQuoteIndex = Math.floor(Math.random()*quotes.length);
        const randomColorIndex = Math.floor(Math.random()*colors.length);
        setQuoteIndex(randomQuoteIndex);
        setColorIndex(randomColorIndex);

    }

    document.body.style = `background: ${colors[colorIndex]}`;

    return (
        <div className='quote-box'>
            <Quote 
            quoteIndex = {quoteIndex}
            colorIndex ={colorIndex}/>
            <QuoteAuthor
             quoteIndex = {quoteIndex}
             colorIndex = {colorIndex}/>
            <RandomizerBtn
             randomizeQuoteNColor = {randomizeQuoteNColor}
             colorIndex = {colorIndex}/>
        </div>
    );
};

export default QuoteBox;