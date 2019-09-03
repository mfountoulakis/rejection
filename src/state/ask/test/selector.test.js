import test from "tape";

import { askReducer } from "../reducer.js";
import { createAsk, createState } from "../reducer-factories";
import { addAsk } from "../actions";
import { getViewState } from "../selectors";

test("Adding asks to the store", ({ same, end }) => {
  const msg = "should return return the correct computed property values";
  const asks = [
    createAsk({
      id: 1,
      timeStamp: 451671300000,
      askee: "Boss",
      question: "Can I refactor your codebase with redux?",
      status: "accepted"
    }),
    createAsk({
      id: 2,
      timeStamp: 451671480000,
      askee: "Manos",
      question: "Why are these so difficult to think of?",
      status: "accepted"
    }),
    createAsk({
      id: 3,
      timeStamp: 451692000000,
      askee: "@JS_Cheerleader",
      question: "Can we learn your real name?",
      status: "rejected"
    })
  ];

  const state = asks.map(addAsk).reduce(askReducer, askReducer());
  const actual = getViewState(state);

  const expected = Object.assign(createState(), {
    asks: asks,
    pointTotal: 12,
    rejectedTotal: 10,
    acceptedTotal: 2
  });

  same(actual, expected, msg);
  end();
});
