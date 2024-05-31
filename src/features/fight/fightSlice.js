 import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    players: [
         { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
         { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
         { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
         { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
        ],

    monster: {
        name:"COMBAT",
        pv :"100",
        pvMax: "100"
    },
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers:
    {
        hitMonster :(state , action) => {
            const damage = action.payload
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