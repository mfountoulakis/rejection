import { describe } from "riteway";
import render from "riteway/render-component";
import React from "react";
import Ask from "components/Ask";
import { Provider } from "react-redux";
import { createAsk } from "state/ask/reducer-factories";

import configureStore from "state/store";

describe("Ask component", async assert => {
  let { store } = configureStore();
  const createComponent = props =>
    render(
      <Provider store={store}>
        <Ask {...props} />
      </Provider>
    );

  {
    const props = {};

    const $ = createComponent(props);

    assert({
      given: "render",
      should: "should render with a className of ask.",
      actual: $(".ask").length,
      expected: 1
    });
  }
  {
    const props = createAsk({
      id: 1,
      timeStamp: 451671300000,
      askee: "Boss",
      question: "Can I refactor your codebase with redux?",
      status: "accepted"
    });

    const $ = createComponent(props);

    assert({
      given: "an askee",
      should: "show the askees name",
      actual: $(".askee")
        .html()
        .trim(),
      expected: "Boss"
    });
  }

  {
    const props = createAsk({
      id: 1,
      timeStamp: 451671300000,
      askee: "Boss",
      question: "Can I refactor your codebase with redux?",
      status: "accepted"
    });

    const $ = createComponent(props);

    assert({
      given: "an question",
      should: "show the asked question",
      actual: $(".question")
        .html()
        .trim(),
      expected: "Can I refactor your codebase with redux?"
    });
  }
});
