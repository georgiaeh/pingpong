//import Axios -> used to make API calls
import axios from '../../axios/axios-config'

//import State actions
import { settings, updateState, updateGames, removeDeletedGame } from './state';


// --- API call to create a New Game --------
export const postNewGame = (data) => {

    return (data ? (dispatch) => {
        //create a new game coming through the settings page
        axios.post("/games",{
            player_1: data.p1Name,
            player_2: data.p2Name,
            winning_score: data.winningScore,
            change_serve: data.altServe
        }).then( ( {data} ) => {
            dispatch(settings(data.data))
        })
    }
        : 
        (dispatch, getState) => {
            let state = getState();
        //create a new game after completing a game (Clicking on New Game button from inside the app)
            axios.post("/games",{
                player_1: state.settings.p1Name,
                player_2: state.settings.p2Name,
                winning_score: state.settings.winningScore,
                change_serve: state.settings.altServe
            }).then( ( {data} ) => {
                dispatch(settings(data.data))
            })
        }
    )
}

// ---- API PATCH to update score when + button clicked ----- 
//Gets gmaeID from state so correct game can be updated
//Player passed in from ScoreCard component -> required to update the score of the right player
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


//---- API GET to retreive games history ----- 
//on successful request dispatches state action to update Games History stored in State
export const getGames = () => {

    return (dispatch) => {

        axios.get('/games').then( ( {data} ) => {
            dispatch(updateGames(data.data));
        })

    }
}


//------ API DELETE to delete selected game -----
//API call and dispatch not linked to make sure passing the game ID and not the API response in to the removeDeletedGame state action
export const deleteGame = (gameID) => {

  axios.delete(`/games/${gameID}`);
    return (dispatch) => {
        dispatch(removeDeletedGame(gameID))
        
    }
}