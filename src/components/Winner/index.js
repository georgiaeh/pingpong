import { connect } from "react-redux";
import Winner from './Winner';

const mapStateToProps = ( { lang, winner }) => {
    return {
        lang, winner
    }
}

export default connect(mapStateToProps)(Winner);