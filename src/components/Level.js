import React from "react";
import { getViewState } from "../state/ask";
import { connect } from "react-redux";

const ConnectedLevel = ({ asks }) => {
	return (
		<nav className="level">
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Total Score</p>
					<p className="title">{asks.pointTotal}</p>
				</div>
			</div>
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Following</p>
					<p className="title">123</p>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return { asks: getViewState(state.asks) };
};

const Level = connect(mapStateToProps)(ConnectedLevel);

export default Level;
