import {NavBar} from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  navigator: state.navigator,
});

export default connect(mapStateToProps)(NavBar);
