import React from 'react';
import colors from './colors.json';

const RandomizerBtn = ({ randomizeQuoteNColor, colorIndex }) => {
    return (
        <div className='button-container'>
            <button onClick={randomizeQuoteNColor} style={{background: colors[colorIndex]}} >
                <i className="fa-solid fa-chevron-right fa-2x"></i>
            </button>
        </div>
    );
};

export default RandomizerBtn;