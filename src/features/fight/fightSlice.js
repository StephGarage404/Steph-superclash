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
        name: "SORCIÈRE",
        pv: 100,
        pvMax: 100,
        mana: 100,
        manaMax: 100, 
        playerHit: 0
    },
    gameState: 'continue'
};

const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const damage = action.payload;
            state.monster.pv = Math.max(state.monster.pv - damage, 0);
        },
        hitBack: (state, action) => {
            const { playerId, attack } = action.payload;
            state.players = state.players.map(player => {
                if (player.id === playerId) {
                    player.pv = Math.max(player.pv - attack, 0);
                }
                return player;
            });
        },
        checkGameOver: (state) => {
            const allPlayersDefeated = state.players.every(player => player.pv <= 0);
            if (allPlayersDefeated) {
                state.gameState = 'defeat';
            } else if (state.monster.pv <= 0) {
                state.gameState = 'victory';
            } else {
                state.gameState = 'continue';
            }
        }
    }
});

export const { hitMonster, hitBack, checkGameOver } = fightSlice.actions;

export const checkGameOverThunk = () => (dispatch, getState) => {
    dispatch(checkGameOver());
};

export default fightSlice.reducer;