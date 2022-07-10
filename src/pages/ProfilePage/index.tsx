import React from 'react';
import { User } from '@firebase/auth';

import { useAppSelector } from '../../hooks/hooks';

import Sidebar from './Sidebar';
import Main from './Main';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const anime = useAppSelector((state) => state.anime.items);

  return (
    <div className="profile">
      <Sidebar {...user} />
      <Main uid={user.uid} items={anime} />
    </div>
  );
};

export default ProfilePage;
