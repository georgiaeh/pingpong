import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { patchScore } from '../../data/actions/api'

const mapStateToProps = ( state, {player} ) => {
    return {
        player: player, //from own properties
        score: state.player2,
        server: state.server,
        winner: state.winner, 
        lang: state.lang,
        name: state.settings.p2Name
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleScore: () => dispatch(patchScore(2))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);