import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {

  return (
    <div>
      {
        people.map((char, i) => {
          return (
            <Card
              key={i}
              id={i}
              name={char.name}
              birth={char.birth_year}
              homeworld={char.homeworld}
              mass={char.mass}
              gender={char.gender}
              starships={char.starships}
              vehicles={char.vehicles}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;