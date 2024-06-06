import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="home">
      <h1>Welcome to the Combat Game</h1>
      <button onClick={onStart}>Play</button>
    </div>
  );
};

export default Home;