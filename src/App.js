import React, { useState } from 'react';
import './App.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import Modal from 'react-bootstrap/Modal';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setIsPlaying(true);
  };

  return (
    <div className="App">
      {isPlaying ? (
        <div>
          <Monster />
          <br />
          <section className="container-fluid">
            <PlayerList />
          </section>
        </div>
      ) : (
        <Home onStart={handleStart} />
      )}
    </div>
  );
};

export default App;