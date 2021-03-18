import { connect } from "react-redux";
import LangSelect from './LangSelect'
import { lang } from '../../data/actions/state'

const mapDispatchToProps = (dispatch) => {

    return {
        handleLang: (data) => dispatch(lang(data))
    }
}


export default connect(null, mapDispatchToProps)(LangSelect);