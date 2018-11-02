import React from 'react';
import * as util from '../../lib/util.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class ListForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.list ? props.list : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.list)
      this.setState(props.list);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
      .catch(error=> {
        util.log('ListForm Error:', error);
        this.setState({error});
      });
    } 
  }

  handleChange(e){
    this.setState({title: e.target.value});
  }

  render(){
    return (
      <form 
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'list-form': true,
          'error': this.state.error,
        })}>

        <input 
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />
        ()
        <button type='submit'><FontAwesomeIcon icon={faPlusSquare} /></button>
      </form>
    )
  }
}

export default ListForm
