import React from 'react';

import './pokemon.scss';

export default class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps() {
    console.log('WILL RECEIVE PROPS IN DETAILS');
  }

  render() {
    return (
      this.props.pokemon.name ?
        <div className="pokemonDetail">
          <h2>{this.props.pokemon.name}</h2>
          <img src={this.props.pokemon.sprites.front_shiny} />
        </div>
      : <div className="pokemonDetail">
        <p>CATCH EM ALL</p>
      </div>
    );
  }
}
