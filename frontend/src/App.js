import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import User from './components/User/User';
import CreateSession from './components/CreateSession/CreateSession';

const BASE_URL = 'http://localhost:4000';

function App() {

  const [users, setUsers] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  let createUsers;

  const fetchUsers = useCallback(() => {
    fetch(BASE_URL + '/users', { credentials: 'include' })
      .then(res => {
        if (res.status === 401) {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          })
        } else {
          setIsAuth(true);
          return res.json();
        }
      })
      .then(users => {
        createUsers(users);
      })
      .catch(err => {
        if (err.status === 401) {
          setIsAuth(false);
        } else {
          console.log('Request Failed.')
        }
      })
  }, [createUsers])

  const onDeleteHandler = useCallback(username => {
    console.log(username);
    fetch(BASE_URL + '/user/' + username, { method: 'DELETE', credentials: 'include' })
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
    console.log('[MOUNTED]');
    if (isAuth) {
      fetchUsers();
    }
  }, [isAuth, fetchUsers])

  const data = (
    <>
      {users}
      <Link to='/add-user' >ADD USER</Link>
      <Link to='/about' >ABOUT</Link>
    </>
  );

  return (
    <div className="App">
      {
        isAuth ? data : <CreateSession setAuth={(status) => setIsAuth(status)} />
      }
    </div>
  );
}

export default App;
