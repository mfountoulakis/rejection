import { describe } from "riteway";
import render from "riteway/render-component";
import React from "react";
import { Level } from "components/Level";

import { Provider } from "react-redux";
import {
  addAsk,
  createAsk,
  askReducer,
  createState,
  getViewState
} from "state/ask";

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
    const props = { pointTotal: 0 };
    const $ = createComponent(props);
    assert({
      given: "render",
      should: "render with a totalScore of zero",
      actual: parseInt(
        $(".pointTotal")
          .html()
          .trim()
      ),
      expected: 0
    });
  }

  {
    const props = { acceptedTotal: 1 };
    const $ = createComponent(props);
    assert({
      given: "acceptedTotal of 1",
      should: "render with an acceptedTotal of 1",
      actual: parseInt(
        $(".acceptedTotal")
          .html()
          .trim()
      ),
      expected: 1
    });
  }
  {
    const props = { rejectedTotal: 10 };
    const $ = createComponent(props);
    assert({
      given: "acceptedTotal of 1",
      should: "render with an acceptedTotal of 10",
      actual: parseInt(
        $(".rejectedTotal")
          .html()
          .trim()
      ),
      expected: 10
    });
  }
});
