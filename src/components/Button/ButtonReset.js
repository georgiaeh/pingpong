import { connect } from "react-redux";
import Button from './Button';
import { reset } from '../../data/actions/state'

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
    }
}

const mapDispatchtoProps = (dispatch) => {

    return {
        handleClick : () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Button);