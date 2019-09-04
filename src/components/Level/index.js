import React from "react";
import { connect } from "react-redux";
import { getViewState } from "state/ask";
import { Level } from "./Level";
//export
export { Level } from "./Level";

const mapStateToProps = state => {
  return getViewState(state.asks);
};

export default connect(
  mapStateToProps,
  null
)(props => <Level {...props} />);
