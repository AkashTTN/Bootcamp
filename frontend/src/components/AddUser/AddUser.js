import React, { useCallback, useState } from 'react';
import './AddUser.css';
import { Redirect } from 'react-router-dom';

const AddUser = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);

    const setRedirect = () => {
        if(success) {
            return <Redirect to='/' />
        }
    }

    const onChangeHandler = useCallback((e, type) => {
        switch (type) {
            case 'username':
                setUsername(e.target.value)
                break;
            case 'name':
                setName(e.target.value)
                break;
            default:
        }   
    }, [])

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault();
        fetch('http://localhost:4000/users/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: '@'+username, name })
        })
        .then(() => {
            setSuccess(true);
        })
        .catch(err => console.log('Add user request failed.'))
    }, [username, name])

    return (
        <div className="Form">
            {setRedirect()}
            <h1>Add a User</h1>
            <form onSubmit={onSubmitHandler} >
                <label>Username</label>
                <input type="text" placeholder="@Username" value={username} onChange={(e) => onChangeHandler(e, 'username')} />
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e) => onChangeHandler(e, 'name')} />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default AddUser;
