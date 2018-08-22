import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>ToDo List</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <div id="main-content">
            <Route exact path="/" component={Landing}/>
            <Route path="/dashboard" component={Dashboard}/>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
