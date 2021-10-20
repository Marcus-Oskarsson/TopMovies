import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './pages/Movies';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/test'>
          <div>TEST</div>
        </Route>
        <Route path='/'>
          <Movies />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
