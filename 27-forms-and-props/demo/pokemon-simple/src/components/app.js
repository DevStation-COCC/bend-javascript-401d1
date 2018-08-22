import React from 'react';
import superagent from 'superagent';

import PokemonList from './pokemon/list.js';
import PokemonDetail from './pokemon/detail.js';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonList: [],
      loading:false,
    };
    this.loadPokemonDetails = this.loadPokemonDetails.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  isLoading(loading) {
    this.setState( Object.assign(...this.state, {loading}) );
  }

  /**
   * Fetching using the async/await pattern instead of Promises
   * not required, but this is an alternative (and more modern)
   * way to do asynchronous work.
   */

  /*
    async componentDidMount() {
      const data = await this.loadPokemonList();
      this.setState( Object.assign(...this.state, data) );
    }

    async loadPokemonList() {
      const pokeData = await this.fetchData(pokemonAPI);
      let pokemonList = pokeData.results;
      return {pokemonList};
    }

    async loadPokemonDetails(e) {
      let url = e.target.value;
      let loading = true;
      const pokemon = await(this.fetchData(url));
      this.setState( Object.assign(...this.state, {pokemon}) );
    }

    async searchPokemon(search) {
      let url = `${pokemonAPI}/${search}`;
      const pokemon = await(this.fetchData(url));
      this.setState( Object.assign(...this.state, {pokemon}) );
    }
  */

  componentDidMount() {
    this.loadPokemonList()
      .then(data =>
        this.setState( Object.assign(...this.state, data) )
      );
  }

  loadPokemonList() {
    return this.fetchData(pokemonAPI)
      .then(pokeData => {
        let pokemonList = pokeData.results;
        return {pokemonList};
      });
  }

  loadPokemonDetails(e) {
    let url = e.target.value;
    let loading = true;
    return this.fetchData(url)
      .then( pokemon =>
        this.setState( Object.assign(...this.state, {pokemon}) )
      );
  }

  searchPokemon(search) {
    let url = `${pokemonAPI}/${search}`;
    return this.fetchData(url)
      .then(pokemon =>
        this.setState( Object.assign(...this.state, {pokemon}) )
      );
  }

  fetchData(url) {
    this.isLoading(true);
    return superagent.get(url)
      .then(result => {
        this.isLoading(false);
        return result.body;
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className={this.state.loading ? 'loading' : null}>
        <PokemonList searchMethod={this.searchPokemon} pokemon={this.state.pokemonList} pokemonLoader={this.loadPokemonDetails} />
        <PokemonDetail pokemon={this.state.pokemon}/>
      </main>
    );
  }

}
