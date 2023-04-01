import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import MovieList from './components/MoviesList'
import SummaryPage from './components/Summary-page'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path='/' element={<MovieList/>}/>
        <Route path='/summary' element={<SummaryPage/>}/>

      </Routes>
      </Router>
    </div>
  );
}


export default App;
