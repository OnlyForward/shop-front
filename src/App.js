import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <IndexPage></IndexPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
