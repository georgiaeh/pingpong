import { connect } from "react-redux";
import ScoreCard from './ScoreCard';

const mapStateToProps = ( state, {player} ) => {
    return {
        player: player, //from own properties
        score: state.player1,
        server: state.server,
        winner: state.winner, 
        lang: state.lang
    }
}

export default connect(mapStateToProps)(ScoreCard);