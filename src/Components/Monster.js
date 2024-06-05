import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import './Game.css';
import './Monster.css';

const Monster = () => {
  const monster = useSelector(state => state.fight.monster);
  console.log(monster.pv);

  const chevalierRef = useRef(null);
  const archerRef = useRef(null);
  const dragonRef = useRef(null);
  const pekkaRef = useRef(null);

  useEffect(() => {
    console.log('Chevalier:', chevalierRef.current);
    console.log('Archer:', archerRef.current);
    console.log('Dragon:', dragonRef.current);
    console.log('Pekka:', pekkaRef.current);
  }, []);

  const players = useSelector(state => state.fight.players);
  console.log(players)
  const test = () => {
    players.map((player) => {
    if (monster.playerHit == 1) {
       pekkaRef.current.classList.remove("hidden")
        setTimeout(() => { pekkaRef.current.classList.add("hidden") }, 2000)
      }else if (monster.playerHit == 2) {
        archerRef.current.classList.remove("hidden")
        setTimeout(() => { archerRef.current.classList.add("hidden") }, 2000)
      }else if (monster.playerHit == 3) {
        chevalierRef.current.classList.remove("hidden")
        setTimeout(() => { chevalierRef.current.classList.add("hidden") }, 2000)
      }else if (monster.playerHit == 4) {
        dragonRef.current.classList.remove("hidden")
        setTimeout(() => { dragonRef.current.classList.add("hidden") }, 2000)
      }
    }
  )
  }
  
  if (chevalierRef.current != undefined) {
    test()
  }
  
  // chevalierRef.current.classList.remove("hidden")
  // setTimeout(() => { chevalierRef.current.classList.add("hidden") }, 2000)

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
                  <img className="img-fluid LaSorciere" src="/Sorciere.png" alt="monster" />
                  <img ref={chevalierRef} className="img-fluid hidden fireBall" src="/fireball.png" alt="chevalier" />
                  <img ref={dragonRef} className="img-fluid hidden fireBallDragon" src="/fireball.png" alt="monster" />
                  <img ref={pekkaRef} className="img-fluid hidden fireBallPekka" src="/fireball.png" alt="monster" />
                  <img ref={archerRef} className="img-fluid hidden fireBallArcher" src="/fireball.png" alt="monster" />
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