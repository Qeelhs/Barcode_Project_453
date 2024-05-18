import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BarcodeInput from './pages/BarcodeInput';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/barcode-input" component={BarcodeInput} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
