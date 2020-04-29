import React from 'react';
import './User.css';

const User = props => {

    const { username, name } = props.userData;

    return (
        <li className="User">
            <p>Username: {username}</p>
            <p>Name: {name}</p>
            <button onClick={(e) => props.onDelete(username)}>DELETE</button>
        </li>
    )
}

export default User;