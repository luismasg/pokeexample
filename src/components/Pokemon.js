import React from 'react';

const Pokemon = ({ details }) => {
  console.log(details);
  return (
    <div className="pokemon-card">
      <h1>{details.name}</h1>
      {details.sprites && <img src={details.sprites.front_shiny} />}
      <p>Attacks</p>

      <ul className="move-list">
        {details.moves?.map((move, index) => {
          return index < 10 ? <li className="move-item">{move.move.name}</li> : null;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
