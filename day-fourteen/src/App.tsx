import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Article from './Components/Article';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route element={ <Article/>} path="/" />
          <Route element={<Details/>} path="details/:id" />
       
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
