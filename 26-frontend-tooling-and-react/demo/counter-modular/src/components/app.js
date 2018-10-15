import React from "react";

import Header from './header/header.js';
import Footer from './footer/footer.js';
import Counter from './counter/counter.js';

import '../style/app.scss';

class App extends React.Component {

  render() {
    return (
      // no need for surrouding div
      <React.Fragment>
        {/* Create a header with some data being passed in */}
        <Header title="Counter"/>
        <main>
          {/* This could a be collection of other Components to give our front-end the look/functionallity we want */}
          <Counter/>
        </main>
        {/* Create a footer with some data being passed in */}
        <Footer footerText="Counters are a great first app!"/>
      </React.Fragment>
    );
  }
}

export default App;