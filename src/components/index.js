import { connect } from "react-redux";
import App from './App';

const mapStateToProps = ( state ) => {
    return { 
        settings: state.settings
    }
}

export default connect(mapStateToProps)(App);