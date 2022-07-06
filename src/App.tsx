import React, { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { auth } from './service/firebase';
import './scss/app.scss';

function App() {
  const [user, loading, error] = useAuthState(auth);
  React.useEffect(() => {
    if (loading) return;
    if (user) console.log(user);
  }, [user, loading]);
  return (
    <div>
      <Header />
      <div className="wrapper">{user ? <ProfilePage /> : <LoginPage />}</div>
    </div>
  );
}

export default App;
