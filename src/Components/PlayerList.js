import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';

const PlayerList = () => {

  const players = useSelector(state => state.fight.players);

  console.log(players);

  return (
    <div className='row'>
      {
        players.map((player, key) => (
          <PlayerCard key={key} player={player} />
        ))
      }
    </div>
  );
}

export default PlayerList;