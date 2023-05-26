import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import BemVindo from './pages/BemVindo';
import Cadastro from './pages/Cadastro';
import Redefinir from './pages/Redefinir';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/bemVindo" element={<BemVindo />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/redefinir" element={<Redefinir />} />
          <Route path="/" element={<Login />} />
        </Routes>
    );
  }
}

export default App;