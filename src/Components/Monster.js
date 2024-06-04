import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import './Game.css';
import './Monster.css'



const Monster = () => {
   const monster = useSelector(state => state.fight.monster)
  
    return (
      <section className="d-flex align-items-center" id='monstre'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card-monstre col-sm-6">
              <div id="monsterCard" className="text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                    <h1>{monster.name}</h1>
                    <img className="img-fluid" id="LaSorciere" src="/Sorciere.png" alt="monster" />
                    <img className="img-fluid" id="BouleBleue" src="/ok.png" alt="monster" />
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-sm-6">
                    <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <div className="col-sm-6">
                    <ProgressBar pv={monster.mana} pvMax={monster.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Monster;