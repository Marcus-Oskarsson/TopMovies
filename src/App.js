import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Details from './pages/Details';
import Movies from './pages/Movies';

const App = () => (
  <Router>
    <Switch>
      <Route path="/:id">
        <Details />
      </Route>
      <Route path="/">
        <Header />
        <Movies />
        <Footer />
      </Route>
    </Switch>
  </Router>
);

export default App;
