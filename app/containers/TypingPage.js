import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typing from '../components/Typing';
import * as TypingActions from '../actions/typing';

function mapStateToProps(state) {
  return {
    typing: state.typing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TypingActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Typing);
