import React from 'react';
import './Game.css';
import Monster from './Monster';
import ProgressBar from './ProgressBar';
import PlayerList from './PlayerList';


const fireBall = () => {

}

const Game = () => {
   {
    return (
      <div className="App">
          <Monster />
        <br></br>
        <section className="container-fluid">
          <PlayerList />
        </section >
      </div>
    )
  }
}

export default Game;