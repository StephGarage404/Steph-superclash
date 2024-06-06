import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import './PlayerCard.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';


const PlayerCard = ({ player }) => {
    const imgRef = useRef()
    const img = imgRef.current

    const monster = useSelector(state => state.fight.monster )
    console.log(monster)
    if (imgRef != undefined) {
        if (player.id == monster.playerHit) {
            
        
        if (monster.playerHit) {
            setTimeout(() => {
                img.classList.add("vibrate")
            }, 400 );
            setTimeout(() => {
                img.classList.remove("vibrate")
            }, 2000 );
        }}
    }

    return ( 
        <div className={`col-sm-3 d-flex justify-content-center align-items-center player${player.id}`} id='cardPlayer' style={{ height: '0vh' }}>
            <div className="card text-center" id={player.id} style={{ width: '18rem' }}>
                <div className="card-body cardBlur">
                    <h5 className="text-white">{player.name}</h5>
                    <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2" id="degatSpanJ1"></span>
                    <img ref={imgRef} src={player.image} className="card-img-top" alt={player.name}></img>
                    <div className="row mt-3">
                        <div className="col">
                            <ButtonCapacity player={player.id} pv={player.pv} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;