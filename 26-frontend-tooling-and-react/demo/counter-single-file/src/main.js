import React from 'react';
import ReactDOM from 'react-dom';

// Add css to React Component
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
  constructor(props){
    super(props);

    console.log(props.message);

    this.state = {
      message: props.message,
    };
  }

  render() {
    return (
      <footer>
        <p>This is our footer</p>
        <p>Message: {this.state.message}</p>
      </footer>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      polarity: 'neutral',
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

  updateState(counter){
    let polarity = null;
    if(counter > 0) { polarity = 'positive'; }
    if(counter < 0) { polarity = 'negative'; }
    if(counter === 0) { polarity = 'neutral'; }

    this.setState({counter, polarity});
  }

  render() {
    return (
      // 'blank' div
      <React.Fragment>
        {/* This is how you can comment your JSX */}
        <Header/>
        <main>
          <div className="container">
            <div className={this.state.polarity} id="counter">{this.state.counter}</div>
            <a onClick={this.handleUp} href="#" id="up">Up</a>
            <a onClick={this.handleDown} href="#" id="down">Down</a>
          </div>
        </main>
        <Footer message="Secret message"/>
      </React.Fragment>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('root'));