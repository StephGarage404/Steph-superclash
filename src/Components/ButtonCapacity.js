import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster , hitBack } from '../features/fight/fightSlice';
import { useSelector } from 'react-redux';





const ButtonCapacity = ({player}) => {

    const monster = useSelector(state => state.fight.monster)

    const dispatch = useDispatch();

    const combat = () => {

        if(monster.pv > 0) {
            dispatch(hitMonster(5))
            console.log('aie !')
       

        dispatch(hitBack({ 
            playerId: player,
            attack: 10 
        }))
    
        
     }

    
    ;
    console.log("Je réplique");
    }

    return (
        <button type="button" onClick={combat} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
}



export default ButtonCapacity;