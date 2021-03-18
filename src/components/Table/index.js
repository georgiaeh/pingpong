import { connect } from "react-redux";
import Table from './Table';
import { getGames, deleteGame } from '../../data/actions/api'

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        history: state.games,
        p1Name: state.settings.p1Name,
        p2Name: state.settings.p2Name,
        winner: state.winner
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleLoad: () => dispatch(getGames()),
        handleDelete : (gameID) => dispatch(deleteGame(gameID))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table);