import React from "react";
import { getViewState } from "../state/ask";
import { connect } from "react-redux";

import { Columns, Section } from "react-bulma-components";
import Ask from "./Ask";

const ConnectedAsks = ({ asks }) => {
	return (
		<Section>
			<Columns>
				{asks.asks.map(ask => (
					<Ask key={ask.id} {...ask} />
				))}
			</Columns>
		</Section>
	);
};

const mapStateToProps = state => {
	return { asks: getViewState(state.asks) };
};

const Asks = connect(mapStateToProps)(ConnectedAsks);

export default Asks;
