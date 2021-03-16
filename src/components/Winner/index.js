import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        winner: state.winner
    }
}

export default connect(mapStateToProps)(Winner);