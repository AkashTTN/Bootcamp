import React, { useEffect, useState } from 'react';

import './About.css';

const About = () => {

    const [content, setContent] = useState(null);

    useEffect(
        () => {
            fetch('http://localhost:4000/about', { credentials: 'include' })
                .then(res => res.json())
                .then(data => {
                    setContent(data)
                })
                .catch(err => console.log('About request failed.'))
        },
        []
    )
    return (
        <div className="About">
            <h1>About Me</h1>
            <p>{content}</p>
        </div>
    )
}

export default About;