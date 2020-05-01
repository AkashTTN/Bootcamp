import React, { useCallback } from 'react';

import './CreateSession.css';

const CreateSession = ({ setAuth }) => {

    const onCreateSessionHandler = useCallback(() => {
        fetch('http://localhost:4000/session', { credentials: 'include' })
            .then(() => setAuth(true))
            .catch(() => setAuth(false))
    }, [setAuth])

    return (
        <div className="CreateSession">
            <p>First authorize yourself by creating a session.</p>
            <button onClick={onCreateSessionHandler}>Create Session</button>
        </div>
    )
}

export default CreateSession;