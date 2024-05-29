import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';


const PlayerCard = (props) => {

    return (
        <div className="col-sm-3 card center" id={props.player.id}>

            <div className="card-body text-center">
                <h5 className="card-title">{props.player.name}</h5>
                <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonCapacity player={ props.player } />
                    </div>
                </div >
            </div >

        </div >
    )
}


export default PlayerCard;