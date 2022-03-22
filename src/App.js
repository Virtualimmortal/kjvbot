//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDVCal, MDBContainer } from 'mdb-react-ui-kit';
import './App.css';
import $ from 'jquery'
//import { FaTimes } from 'react-icons/fa'
//import "mdb-react-ui-kit/dist/css/mdb.min.css"
import Header from './components/Header';
import Loader from './components/Loader';
import SearchForm from './components/SearchForm';
import SearchIndicator from './components/SearchIndicator';

function App() {

  return (
    <div className="App">
      <Loader />
      <SearchForm kjvBot />
    </div>
  );
}

export default App;
