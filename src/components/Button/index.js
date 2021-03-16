import { connect } from "react-redux";
import Button from './Button';

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
    }
}

export default connect(mapStateToProps)(Button);