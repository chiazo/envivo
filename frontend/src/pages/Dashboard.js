import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../style.css';

const Dashboard = () => {
  const [user, setUser] = useState(false);
  const url = process.env.REACT_APP_DB_URL;

  const getUsers = () => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => setUser(data));
  };

  useEffect(getUsers, []);

  const createUser = () => {
    const name = prompt('enter your name');
    const username = prompt('enter your desired username');
    const email = prompt('enter your email');

    fetch(url + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        getUsers();
      });
  };

  const deleteUser = () => {
    const id = prompt('Enter user id');
    fetch(url + `/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        getUsers();
      });
  };

  return (
    <div>
      <NavBar />
      {user ? user : 'There are no users available'}
      <br />
      <button onClick={createUser}>Add User</button>
      <br />
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
};

export default Dashboard;
