import axios from '../../axios/axios-config'
import { settings, updateState, updateGames, removeDeletedGame } from './state';

export const postNewGame = (data) => {

    return (data ? (dispatch) => {
        //create a new game coming through the settings page
        axios.post("/games",{
            player_1: data.p1Name,
            player_2: data.p2Name,
            winning_score: data.winningScore,
            change_serve: data.altServe
        }).then( ( {data} ) => {
            console.log(data.data)
            dispatch(settings(data.data))
        })
    }
        : 
        (dispatch, getState) => {
            let state = getState();
        //create a new game after completing a game (from inside the app)
            axios.post("/games",{
                player_1: state.settings.p1Name,
                player_2: state.settings.p2Name,
                winning_score: state.settings.winningScore,
                change_serve: state.settings.altServe
            }).then( ( {data} ) => {
                console.log(data.data)
                dispatch(settings(data.data))
            })
        }
    )
}


export const patchScore = (player) => {

    return (dispatch, getState) => {

        let gameID = getState().gameID;

        axios.patch(`/games/${gameID}/score`, {
            player: player
        }).then( ( {data} ) => {
            dispatch(updateState(data.data))
        })
    }
}

export const getGames = () => {

    return (dispatch) => {

        axios.get('/games').then( ( {data} ) => {
            console.log(data)
            dispatch(updateGames(data.data));
        })

    }
}

export const deleteGame = (gameID) => {

  axios.delete(`/games/${gameID}`);
    return (dispatch) => {
        dispatch(removeDeletedGame(gameID))
        
    }
}