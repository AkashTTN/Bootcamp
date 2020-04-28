import React, { useCallback, useState } from 'react';
import './App.css';

function App() {

  const [content, setContent] = useState(null);
  const [time, setTime] = useState(null);

  // value of setTimeout identifier will be lost because of rerender 
  // therefore request will not be cancelled
  const debounce = useCallback(function (func, path) {
    clearTimeout(time);

    setTime(setTimeout(func(path), 2000));
  }, []);

  const makeRequest = useCallback((path) => {
    fetch('http://localhost:4000/' + path)
      .then(res => res.text())
      .then(data => {
        setContent(data)
      })
  }, [])

  const onClickHomeHandler = useCallback(e => {
    debounce(makeRequest, 'home');
  }, [debounce, makeRequest])

  const onClickAboutHandler = useCallback(e => {
    debounce(makeRequest, 'about');
  }, [debounce, makeRequest])

  const onClickContactHandler = useCallback(e => {
    debounce(makeRequest, 'contact');
  }, [debounce, makeRequest])

  return (
    <div className="App">
      <nav className="Nav" >
        <button className="Button" onClick={onClickHomeHandler} >HOME</button>
        <button className="Button" onClick={onClickAboutHandler} >About</button>
        <button className="Button" onClick={onClickContactHandler} >Contact Us</button>
      </nav>
      <h2>{content}</h2>
    </div>
  );
}

export default App;
