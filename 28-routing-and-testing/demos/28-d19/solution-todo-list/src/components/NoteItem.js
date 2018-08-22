import React, { Component } from 'react';

class NoteItem extends Component {
  constructor(props) {
    super(props)
    this.destroy = this.destroy.bind(this)
  }

  destroy() {
    this.props.destroyNote(this.props.note)
  }

  render() {
    return (
      <li className="note">
        <input type="checkbox" />
        <button onClick={this.destroy}>delete</button>
        <div className="title">{this.props.note.title}</div>
        <div className="content">{this.props.note.content}</div>
      </li>
    );
  }
}

export default NoteItem;