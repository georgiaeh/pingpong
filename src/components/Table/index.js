import { connect } from "react-redux";
import Table from './Table';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        history: state.games
    }
}

export default connect(mapStateToProps)(Table);