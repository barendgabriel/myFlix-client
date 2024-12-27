import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import moment from 'moment';

const ProfileView = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBirthday, setNewBirthday] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    // Fetch user data from the backend API (MongoDB Atlas is already integrated with the backend)
    axios
      .get(`https://myflixmovieapp.onrender.com/users/${user.username}`, {
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

  const handleSaveClick = (e) => {
    e.preventDefault();

    // Update user data through the backend API
    const updatedUserData = {
      username: newUsername || userData.username,
      password: newPassword || userData.password,
      email: newEmail || userData.email,
      birthday: newBirthday || userData.birthday,
    };

    axios
      .put(
        `https://myflixmovieapp.onrender.com/users/${userData.username}`,
        updatedUserData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
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
          <form onSubmit={handleSaveClick}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={newUsername || userData.username}
                onChange={(e) => setNewUsername(e.target.value)}
                required
                minLenght="5"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={newEmail || userData.email}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={moment(newBirthday || userData.birthday).format(
                  'YYYY-MM-DD'
                )}
                onChange={(e) => setNewBirthday(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button
              variant="default"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Birthday:</strong>{' '}
            {moment(userData.birthday).format('MMM Do YY')}
          </div>
          <button onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
