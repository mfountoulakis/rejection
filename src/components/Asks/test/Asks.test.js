import { describe } from "riteway";
import render from "riteway/render-component";
import { Asks } from "components/Asks";

import { Provider } from "react-redux";
import configureStore from "state/store";
import {
  askReducer,
  addAsk,
  getViewState,
  createAsk,
  getAsks
} from "state/ask";

import React, { useReducer } from "react";

describe("Asks component", async assert => {
  const { store } = configureStore();

  const createComponent = props =>
    render(
      <Provider store={store}>
        <Asks {...props} />
      </Provider>
    );
  {
    const props = { asks: [] };
    const $ = createComponent(props);

    assert({
      given: "initial render",
      should: "render with a className of asks.",
      actual: $(".asks").length,
      expected: 1
    });
  }
  {
    const props = {
      asks: [
        {
          id: "ck048w4ls00003h5svcu2whc3",
          timeStamp: 1567540082512,
          askee: "Askee",
          question: "my question",
          status: "accepted"
        }
      ]
    };

    const $ = createComponent(props);

    assert({
      given: "initial render with an ask",
      should: "render with a single className of ask.",
      actual: $(".ask").length,
      expected: 1
    });
  }
});
