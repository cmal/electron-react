import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Setting from '../components/Setting';
import * as SettingActions from '../actions/setting';

function mapStateToProps(state) {
  return {
    setting: state.setting
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
