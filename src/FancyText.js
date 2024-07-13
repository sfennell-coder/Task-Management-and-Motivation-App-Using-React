import React from'react';
import './FancyText.css';

export function FancyText({title, text}){
    return(
        <div className={title ? 'fancyTitle' : 'fancyText'}>
            {text}
        </div>
    )
}