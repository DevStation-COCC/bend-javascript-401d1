import React from 'react';

export default class Search extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      search: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch(e) {
    let search = e.target.value;
    this.setState({search});
  }

  componentWillReceiveProps() {
    console.log('WILL RECEIVE PROPS IN SEARCH');
  }

  render() {

    return (
      <div className="pokemonSearch">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch} placeholder="Search..." />
        </form>
      </div>
    );
  }
}
