import React from 'react';

export default class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({search});
  }

  render() {
    return(
      <div className="pokemonList">

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} placeholder="Search..." />
        </form>

        <form>
          {
            this.props.pokemon.map( (pokemon,i) =>
              <div key={i}>
                <input
                  onChange={this.props.pokemonLoader}
                  type="radio"
                  id={pokemon.name}
                  name="pokemon"
                  value={pokemon.url}
                />
                <label htmlFor={pokemon.name}>
                  {pokemon.name}
                </label>
              </div>
            )
          }
        </form>
      </div>
    );
  }

}
