import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/anime-list" element={<Layout />}>
        <Route path="/anime-list" element={<MainPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
