import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './service/firebase';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/anime-list" element={<Layout />}>
        <Route path="/anime-list" element={<MainPage />}></Route>

        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
