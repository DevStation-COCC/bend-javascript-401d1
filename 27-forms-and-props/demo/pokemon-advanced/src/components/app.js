import React from 'react';

import PokemonList from './pokemon/list.js';
import PokemonDetail from './pokemon/detail.js';
import {fetchData} from '../lib/utils.js';

import '../style/app.scss';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonList:[],
      loading:false,
    };
    this.pokemonSearch = this.pokemonSearch.bind(this);
    this.pokemonDetails = this.pokemonDetails.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
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
      const pokeData = await this.load(pokemonAPI);
      let pokemonList = pokeData.results;
      return {pokemonList};
    }

    async pokemonDetails(e) {
      let url = e.target.value;
      let loading = true;
      const pokemon = await(this.load(url));
      this.setState( Object.assign(...this.state, {pokemon}) );
    }

    async pokemonSearch(search) {
      let url = `${pokemonAPI}/${search}`;
      const pokemon = await(this.load(url));
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
    return this.load(pokemonAPI)
      .then(pokeData => {
        let pokemonList = pokeData.results;
        return {pokemonList};
      });
  }

  pokemonDetails(e) {
    let url = e.target.value;
    let loading = true;
    return this.load(url)
      .then( pokemon =>
        this.setState( Object.assign(...this.state, {pokemon}) )
      );
  }

  pokemonSearch(search) {
    let url = `${pokemonAPI}/${search}`;
    return this.load(url)
      .then(pokemon =>
        this.setState( Object.assign(...this.state, {pokemon}) )
      );
  }

  load(url) {
    this.setState( Object.assign(...this.state, {loading:true}) );
    return fetchData(url)
      .then(data => {
        this.setState( Object.assign(...this.state, {loading:false}) );
        return data;
      });
  }

  render() {
    return (
      <main className={this.state.loading ? 'loading' : null}>
        <PokemonList pokemon={this.state.pokemonList} pokemonLoader={this.pokemonDetails} searchMethod={this.pokemonSearch}/>
        <PokemonDetail pokemon={this.state.pokemon}/>
      </main>
    );
  }

}

export default App;
