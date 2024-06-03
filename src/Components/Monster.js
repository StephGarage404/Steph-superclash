import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';

const Monster = () => {
   const monster = useSelector(state => state.fight.monster)
  
    return (
      <section style={{ height: '100vh' }} className="d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="card-monstre col-sm-8">
              <div id="monsterCard" className="text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <span className="badge badge-danger ml-2" id="degatSpanMonster"></span>
                    <h1>{monster.name}</h1>
                    <img className="img-fluid" src="/Cavalier.png" alt="monster" />
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