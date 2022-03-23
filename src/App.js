//import React, { useState, useEffect } from 'react';
import './App.css';
import $ from 'jquery'
import Header from './components/Header';
import Loader from './components/Loader';
import Sidenav from './components/Sidenav';
import SearchForm from './components/SearchForm';
import SearchIndicator from './components/SearchIndicator';

function App() {
  const nightMode = true;
  return (
    <div className="App">
      <Header />
      <Loader />
      <Sidenav nightMode/>
      <SearchForm kjvBot />
    </div>
  );
}


export default App;
