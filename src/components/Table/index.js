import { connect } from "react-redux";
import Table from './Table';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
        history: state.games,
        p1Name: state.p1Name,
        p2Name: state.p2Name
    }
}

export default connect(mapStateToProps)(Table);