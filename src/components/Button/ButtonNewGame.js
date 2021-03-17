import { connect } from "react-redux";
import Button from './Button';
import { newGame } from '../../data/actions'

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
    }
}

const mapDispatchtoProps = (dispatch) => {

    return {
        handleClick : () => dispatch(newGame())
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Button);