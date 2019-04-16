import React from 'react';

const StarwarsCharacters = (props) => {
    return (
        <div className='characteristics'>
            <h2 className='charname'>{props.characters.name}</h2>
            <p className='haircolor'>Hair Color: {props.characters.hair_color}</p>
            <p className='eyecolor'>Eye Color: {props.characters.eye_color}</p>
            
        </div>
    );
}


export default StarwarsCharacters;