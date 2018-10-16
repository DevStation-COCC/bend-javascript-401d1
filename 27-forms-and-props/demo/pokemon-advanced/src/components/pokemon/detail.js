import React from 'react';

import './pokemon.scss';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      // Conditionally Render
      this.props.pokemon.name ?

        <div className="pokemonDetail">

          <h2>{this.props.pokemon.name}</h2>
          <img src={this.props.pokemon.sprites.front_shiny}/>

          <div>
            <h3>Abilities</h3>
            <ul>
              {this.props.pokemon.abilities.map( (ability,i) =>
                <li key={i}>{ability.ability.name}</li>
              )}
            </ul>
          </div>

          <div>
            <h3>Moves</h3>
            <ul>
              {this.props.pokemon.moves.map( (move,i) =>
                <li key={i}>{move.move.name}</li>
              )}
            </ul>
          </div>

        </div>

        : null
    );
  }
}
