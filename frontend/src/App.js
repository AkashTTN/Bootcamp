import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import User from './components/User/User';

const BASE_URL = 'http://localhost:4000/users/';

function App() {

  const [users, setUsers] = useState(null);

  let createUsers;

  const fetchUsers = useCallback(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(users => {
        createUsers(users);
      })
      .catch(err => {
        console.log('Request Failed.')
      })
  }, [createUsers])

  const onDeleteHandler = useCallback(username => {
    console.log(username);
    fetch(BASE_URL + username, { method: 'DELETE' })
      .then(res => {
        fetchUsers();
      })
      .catch(err => console.log('Delete request failed.'))
  }, [fetchUsers])

  createUsers = useCallback(users => {
    setUsers(users.map((user, index) => {
      return (
        <User
          key={index}
          userData={user}
          onDelete={onDeleteHandler}
        />
      )
    }))
  }, [onDeleteHandler])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])

  return (
    <div className="App">
      {users}
      <Link to='/add-user' >ADD USER</Link>
      <Link to='/about' >ABOUT</Link>
    </div>
  );
}

export default App;
