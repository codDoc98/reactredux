import React from 'react';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductListing } from './containers/ProductListing';
import { ProductDetails } from './containers/ProductDetails';
function App(props) {
  return (
    <div className='App'>
      <Header/>
      <br/>
      <br/>
      <br/>
      <Router>
        <Header/>
        <Routes>
        <Route path='/' exact Component={ProductListing}></Route>
        <Route path='/product/:productId' exact Component={ProductDetails}></Route>
        <Route> 404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;