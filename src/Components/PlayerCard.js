import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';
import './PlayerCard.css';


const PlayerCard = ({ player }) => {
    return (
        <div className={`col-sm-3 d-flex justify-content-center align-items-center player${player.id}`} id='cardPlayer' style={{ height: '0vh' }}>
            <div className="card text-center" id={player.id} style={{ width: '18rem' }}>
                <div className="card-body cardBlur">
                    <h5 className="text-white">{player.name}</h5>
                    <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                    <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                    <span className="badge badge-danger ml-2" id="degatSpanJ1"></span>
                    <img src={player.image} className="card-img-top" alt={player.name}></img>
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