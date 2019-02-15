import React from 'react';


import StarwarsCharacters from './StarwarsCharacters';

const CharacterList = props => {
    return (
        <div className='character-card'>
            {props.starwarsChars.map(character => (
              <StarwarsCharacters characters={character} />
            ))}
            
        </div>
    )
}

export default CharacterList;