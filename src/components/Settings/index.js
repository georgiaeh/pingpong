import { connect } from "react-redux";
import Settings from './Settings';
import { settings } from '../../data/actions'

const mapStateToProps = ( state ) => {
    return { 
        lang: state.lang
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleSettings: (data) => dispatch(settings(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);