import { connect } from "react-redux";
import ScoreCard from './ScoreCard';
import { scoreP1 } from '../../data/actions'

const mapStateToProps = ( state, {player} ) => {
    return {
        player: player, //from own properties
        score: state.player1,
        server: state.server,
        winner: state.winner, 
        lang: state.lang
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleScore: () => dispatch(scoreP1())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);