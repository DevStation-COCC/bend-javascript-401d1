import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <section className="modal">
        <div className="modal-content">
          <button onClick={this.props.close}>x</button>
          <main>
            {this.props.children}
          </main>
        </div>
      </section>
    );
  }
}