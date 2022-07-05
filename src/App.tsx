import React from 'react';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

import './scss/app.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {/* <LoginPage /> */}
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
