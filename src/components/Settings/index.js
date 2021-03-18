import { connect } from "react-redux";
import Settings from './Settings';
import { postNewGame }  from '../../data/actions/api';


const mapStateToProps = ( state ) => {
    return { 
        lang: state.lang
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleSettings: (data) => dispatch(postNewGame(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);