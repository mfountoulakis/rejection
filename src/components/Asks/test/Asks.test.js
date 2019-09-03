import { describe } from "riteway";
import render from "riteway/render-component";
import React from "react";
import Asks from "components/Asks";

import { Provider } from "react-redux";
import configureStore from "state/store";
import { askReducer, addAsk, getViewState, createAsk } from "state/ask";

describe("Asks component", async assert => {
	const { store } = configureStore();

	const createComponent = props =>
		render(
			<Provider store={store}>
				<Asks {...props} />
			</Provider>
		);

	const props = {};
	const $ = createComponent(props);

	assert({
		given: "initial render",
		should: "render with a className of asks.",
		actual: $(".asks").length,
		expected: 1
	});
});