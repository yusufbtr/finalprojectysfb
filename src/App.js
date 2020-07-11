import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import Hooks from './Hooks';
import Profile from './Profile';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/> {/*route ke page home*/}
              <Route path="/hooks" component={Hooks}/> {/*route ke page about*/}
              <Route path="/profile" component={Profile}/> {/*route ke page profile */}
            </Switch>
          </Router>
        </Layout>
    </React.Fragment>
    );
  }

  
}

export default App;
