import {connect} from 'react-redux';

import {LangSelector} from "./LangSelector";
import {coreRedux} from "../../../redux";

const mapStateToProps = (state) => ({
  lang: state.core.lang,
});

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(coreRedux.actions.setLang(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);