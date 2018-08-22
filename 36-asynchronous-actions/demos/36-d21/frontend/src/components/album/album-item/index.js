import React from 'react'

class AlbumItem extends React.Component {
  render() {
    return (
      <li id={this.props.album._id}>
        <div>
          <span onClick={() => this.props.albumDelete(this.props.album)}>x</span>
          <p>{this.props.album.name}</p>
        </div>
      </li>
    )
  }
}

export default AlbumItem
