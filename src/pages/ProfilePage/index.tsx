import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';
import { User } from '@firebase/auth';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="profile">
      <Sidebar {...user} />
      <Main uid={user.uid} />
    </div>
  );
};

export default ProfilePage;
