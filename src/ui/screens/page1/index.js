import { connect } from 'react-redux';

import { Page1 } from './Page1';
import {homeActions} from '../../../redux/home/actions';

const mapStateToProps = (state) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch) => ({
  setCount: (count) => dispatch(homeActions.setCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);