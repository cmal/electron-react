import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rank from '../components/Rank';
import * as RankActions from '../actions/rank';

function mapStateToProps(state) {
  return {
    rank: state.rank
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RankActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rank);
