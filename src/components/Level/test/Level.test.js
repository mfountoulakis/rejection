import { describe } from "riteway";
import render from "riteway/render-component";
import React from "react";
import Level from "components/Level";

import { Provider } from "react-redux";
import { addAsk, createAsk, askReducer, createState } from "state/ask";

import configureStore from "state/store";

describe("Level component", async assert => {
	const { store } = configureStore();

	const createComponent = props =>
		render(
			<Provider store={store}>
				<Level {...props} />
			</Provider>
		);
	{
		const props = {};
		const $ = createComponent(props);
		assert({
			given: "render",
			should: "render with a totalScore of zero",
			actual: $(".totalScore")
				.html()
				.trim(),
			expected: "0"
		});
	}

	{
		const props = {};
		const $ = createComponent(props);
		assert({
			given: "render",
			should: "render with a totalScore class",
			actual: $(".totalScore").length,
			expected: 1
		});
	}
});
