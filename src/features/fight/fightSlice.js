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
    reducer: 
    {
        hitMonster :(state,action) => {
            const damage = action.payload
            return {
                ...state,
                monster: {
                    ...state.monsters,
                pv: (state.monster.pv - damage)

                }
            } 
        }
    },
});

export const { hitMonster } = fightSlice.actions
export default fightSlice.reducer;