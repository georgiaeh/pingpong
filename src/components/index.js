import { connect } from "react-redux";
import App from './App';

const mapStateToProps = ( state ) => {
    return { 
        gamestart: state.gamestart
    }
}

export default connect(mapStateToProps)(App);