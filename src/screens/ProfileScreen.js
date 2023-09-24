import React from 'react';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.css';

function ProfileScreen() {
  const user = useSelector(selectUser);

  if (!user) {
    return (
      <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
          <h1>Please log in to view your profile.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
