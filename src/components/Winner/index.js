import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        winner: state.winner,
        p1Name: state.settings.p1Name,
        p2Name: state.settings.p2Name,

    }
}

export default connect(mapStateToProps)(Winner);