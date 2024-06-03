import { createSlice } from "@reduxjs/toolkit";
import ImgPekka from '../../icons/Pekka.png';
import ImgArcher from '../../icons/Archer.png';
import ImgChevalier from '../../icons/Chevalier.png';
import ImgDragon from '../../icons/Dragon.png';


const initialState = {

    players: [
         { name: "Pekka", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, image: ImgPekka },
         { name: "Archer", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, image: ImgArcher },
         { name: "Chevalier", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, image: ImgChevalier },
         { name: "Dragon", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, image: ImgDragon }
        ],

    monster: {
        name:"Chevaucheur",
        pv :"100",
        pvMax: "100",
        mana : "100",
        manaMax : "100"
    },
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers:
    {
        hitMonster :(state , action) => {
            const damage = action.payload

            if (state.monster.pv < 0) {
                state.monster.pv = 0;
            }

            return {
                ...state,
                monster: 
                {
                    ...state.monster,
                pv: (state.monster.pv - damage)
                }
            }
        },

        hitBack: (state, action) => {
            const { playerId, attack } = action.payload;
            state.players = state.players.map(player => {
              if (player.id === playerId) {
                player.pv -= attack;
              }
              return player;
            });

    },
}});


export const { hitMonster , hitBack } = fightSlice.actions
export default fightSlice.reducer;