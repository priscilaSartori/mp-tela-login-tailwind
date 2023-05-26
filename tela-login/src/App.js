import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import BemVindo from './pages/BemVindo';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/bemVindo" element={<BemVindo />} />
          <Route path="/" element={<Login />} />
        </Routes>
    );
  }
}

export default App;