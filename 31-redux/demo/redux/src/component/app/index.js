import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import DashboardContainer from '../dashboard-container'

import {Provider} from 'react-redux';
import createAppStore from '../../lib/store.js'

const store = createAppStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });

    // Initialize default state
    store.dispatch({type: null});
  }

  render() {
    return (
      <section className="reduxinator-application">
        <Provider store={store}>
          <BrowserRouter>
            {/* Just a single Route to a single Counter */}
            <Route exact path="/" component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App
