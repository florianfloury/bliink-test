import {NavBar} from "./Navbar";
import {connect} from "react-redux";
import {coreRedux} from "../../../redux";

const mapStateToProps = (state) => ({
  navigator: state.navigator,
  lang: state.core.lang,
});

const mapDispatchToProps = (dispatch) => ({
  setLang: (lang) => dispatch(coreRedux.actions.setLang(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
