import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileView = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Fetch user data from the backend API (MongoDB Atlas is already integrated with the backend)
    axios
      .get('http://localhost:3000/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => {
        setUserData(response.data); // Assuming the backend returns user data
      })
      .catch((err) => {
        console.error(err);
        // Handle error, e.g., show error message
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update user data through the backend API
    const updatedUserData = {
      username: newUsername || userData.username,
      password: newPassword || userData.password,
    };

    axios
      .put('http://localhost:3000/api/profile', updatedUserData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => {
        setUserData(response.data); // Update local state with the response
        setIsEditing(false);
      })
      .catch((err) => {
        console.error(err);
        // Handle error, e.g., show error message
      });
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile View</h2>
      {isEditing ? (
        <div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={newUsername || userData.username}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={newPassword || userData.password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSaveClick}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
