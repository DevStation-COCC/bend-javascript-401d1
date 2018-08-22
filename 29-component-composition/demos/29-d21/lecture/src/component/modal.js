import React from 'react'

class Modal extends React.Component {
  render() {
    return (
      <section className="modal">
        <span onClick={this.props.close}>x</span>
        <main>
          {this.props.children}
        </main>
      </section>
    )
  }
}

export default Modal
