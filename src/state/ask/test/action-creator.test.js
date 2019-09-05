import test from "tape";
import { createState, createStoreCopy } from "../reducer-factories";
import { askReducer } from "../reducer";
import { addAsk, acceptAsk, rejectAsk } from "../actions";

test("creating an ask with all arguments", ({ same, end }) => {
  const msg = "should return the correct state";

  const actual = askReducer(
    undefined,
    addAsk({
      id: 1,
      timeStamp: 1472322852682,
      askee: "@_ericelliott",
      question: "Can I borrow your twitter handle for a day?",
      status: "pending"
    })
  );
  const expected = Object.assign(createState(), {
    asks: [
      {
        id: 1,
        timeStamp: 1472322852682,
        askee: "@_ericelliott",
        question: "Can I borrow your twitter handle for a day?",
        status: "pending"
      }
    ]
  });

  same(actual, expected, msg);
  end();
});

test("acceptAsk()", ({ same, end }) => {
  const msg = "should change an asks status to accepted ";

  const initialState = askReducer(
    undefined,
    addAsk({
      id: 1,
      timeStamp: 1472322852682,
      askee: "@_ericelliott",
      question: "Can I borrow your twitter handle for a day?",
      status: "pending"
    })
  );

  const actual = askReducer(initialState, acceptAsk(1));

  const expected = Object.assign(createState(), {
    asks: [
      {
        id: 1,

        timeStamp: 1472322852682,
        askee: "@_ericelliott",
        question: "Can I borrow your twitter handle for a day?",
        status: "accepted"
      }
    ]
  });

  same(actual, expected, msg);
  end();
});

test("rejectAsk()", ({ same, end }) => {
  const msg = "should change an asks status to rejected";

  const initialState = askReducer(
    undefined,
    addAsk({
      id: 1,
      timeStamp: 1472322852682,
      askee: "@_ericelliott",
      question: "Can I borrow your twitter handle for a day?",
      status: "pending"
    })
  );

  const actual = askReducer(initialState, rejectAsk(1));

  const expected = Object.assign(createState(), {
    asks: [
      {
        id: 1,
        timeStamp: 1472322852682,
        askee: "@_ericelliott",
        question: "Can I borrow your twitter handle for a day?",
        status: "rejected"
      }
    ]
  });

  same(actual, expected, msg);
  end();
});
