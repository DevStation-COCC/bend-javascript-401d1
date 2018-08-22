import React from "react";

import Header from './header/header.js';
import Footer from './footer/footer.js';
import Counter from './counter/counter.js';

import '../style/app.scss';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header title="Counter"/>
        <main>
          <Counter/>
        </main>
        <Footer footerText="Counters are a great first app!"/>
      </React.Fragment>
    );
  }
}

export default App;