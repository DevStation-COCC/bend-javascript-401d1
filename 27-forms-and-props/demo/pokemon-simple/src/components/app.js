import React from 'react';
import superagent from 'superagent';

import PokemonSearch from './pokemon/search';
import PokemonDetail from './pokemon/detail';

import DigimonSearch from './digimon/search';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      pokemon: {},
    }

    this.searchPokemon = this.searchPokemon.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidUpdate() {
    console.log('DID', this.state);
  }

  componentWillUpdate(){
    console.log('WILL', this.state);
  }

  searchPokemon(search){
    let url = `${pokemonAPI}/${search}/`;

    return this.fetchData(url)
      .then(pokemon => {
        this.setState({pokemon});
      });
  }

  fetchData(url){
    return superagent.get(url)
      .then(result => {
        return result.body;
      })
      .catch(console.error); // Need better error handling
  }

  render() {
    return (
      <main>
        <PokemonSearch searchMethod={this.searchPokemon}/>
        <PokemonDetail pokemon={this.state.pokemon}/>
      </main>
    );
  }
}
