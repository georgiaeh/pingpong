import { connect } from "react-redux";
import Table from './Table';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        history: state.games,
        p1Name: state.settings.p1Name,
        p2Name: state.settings.p2Name
    }
}

export default connect(mapStateToProps)(Table);