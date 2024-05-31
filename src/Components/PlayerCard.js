import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';


const PlayerCard = ({ player }) => {

    return (
        <div className="col-sm-3 card center" id={player.id}>

            <div className="card-body text-center">
                <h5 className="card-title">{player.name}</h5>
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <img src={player.image}></img>
                <div className="row ">
                    <div >
                        <ButtonCapacity player={player.id} pv={ player.pv } />
                    </div>
                </div >
            </div >

        </div >
    )
}


export default PlayerCard;