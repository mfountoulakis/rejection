import React from "react";
import { Asks } from "./Asks";
import { getAsks } from "state/ask";
import { connect } from "react-redux";

//export
export { Asks } from "./Asks";

const mapStateToProps = state => {
  return { asks: getAsks(state.asks) };
};

export default connect(
  mapStateToProps,
  null
)(props => <Asks {...props} />);
