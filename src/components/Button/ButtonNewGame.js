import { connect } from "react-redux";
import Button from './Button';
import { postNewGame } from '../../data/actions/api'

const mapStateToProps = ( state ) => {
    return {
        lang: state.lang,
    }
}

const mapDispatchtoProps = (dispatch) => {

    return {
        handleClick : () => dispatch(postNewGame())
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Button);