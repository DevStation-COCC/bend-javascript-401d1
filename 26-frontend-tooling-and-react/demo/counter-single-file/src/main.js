import React from 'react';
import ReactDom from 'react-dom';

import './style/app.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Our Counter Application</h1>
      </header>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.words);
  }

  render() {
    return (
      <footer>
        This is our footer
      </footer>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter:0,
      polarity:"neutral"
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleUp() {
    this.updateState(this.state.counter+1);
  }

  handleDown() {
    this.updateState(this.state.counter-1);
  }

  updateState(counter) {
    let polarity = null;
    if(counter > 0) { polarity = "positive"; }
    if(counter < 0) { polarity = "negative"; }
    this.setState({counter,polarity});
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <div className="container">
            <div className={this.state.polarity} id="counter">{this.state.counter}</div>
            <a onClick={this.handleUp} href="#" id="up">U</a>
            <a onClick={this.handleDown} href="#" id="down">D</a>
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}


ReactDom.render(<App/>, document.getElementById('root'));