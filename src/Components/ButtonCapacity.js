import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitMonster, hitBack, checkGameOverThunk } from '../features/fight/fightSlice';
import './ButtonCapacity.css';


const ButtonCapacity = ({ player }) => {
    const dispatch = useDispatch();
  
    const monster = useSelector(state => state.fight.monster);
    const players = useSelector(state => state.fight.players);
    const gameState = useSelector(state => state.fight.gameState);

    const combat = () => {
        if (monster.pv > 0 && gameState === 'continue') {
            dispatch(hitMonster(5));
            console.log('Aie !');

            dispatch(checkGameOverThunk());
        }

        console.log("Je réplique");
    };

    const fireBall = () => {
        dispatch(hitBack({
            playerId: player,
            attack: 10
        }));
    
        console.log("fireBall")
    }

    //  lancer func-ion en meme temps que le hit back 

    // nouvelle fctn qui prend la div sorciere en parametre et le payer sur qui elle doit aller (en props)

    // mettre la boule  display none et a hitback lancer lannimation

    if (gameState === 'victory') {
        return <div className='VictoireJoueur'>Victoire !</div>;
    } else if (gameState === 'defeat') {
        return <div>Défaite !</div>;
    }

    return (
        <button type="button" onClick={() => { combat(); fireBall() }} className="btn btn-outline-info">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    );
};

export default ButtonCapacity;