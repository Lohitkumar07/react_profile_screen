// src/components/Profile.js
import React from 'react';

const Profile = () => {
  const profileData = {
    name: "John Doe",
    username: "@johndoe",
    bio: "Frontend Developer",
    followers: 1000,
    following: 500,
    posts: 120,
    avatar: "path/to/avatar.jpg"
  };

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={profileData.avatar} alt="Profile Avatar" />
      </div>
      <div className="info-container">
        <h1>{profileData.name}</h1>
        <p>{profileData.username}</p>
        <p>{profileData.bio}</p>
        <div className="stats">
          <p>Followers: {profileData.followers}</p>
          <p>Following: {profileData.following}</p>
          <p>Posts: {profileData.posts}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
