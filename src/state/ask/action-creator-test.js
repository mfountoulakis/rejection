import test from "tape";
import { createState, createStoreCopy } from "./reducer-factories";
import { askReducer } from "./reducer";
import { addAsk, acceptAsk, rejectAsk } from "./actions";

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

  //create copy of redux store from reducer-factories
  //Not sure if this is the correct way to test dispatched actions.
  const store = createStoreCopy(askReducer, initialState);

  //dispatch acceptAsk action to store with ask id
  store.dispatch(acceptAsk(1));

  //examine the state of the store
  var actual = store.getState();

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

  //create copy of redux store from reducer-factories
  //Not sure if this is the correct way to test dispatched actions.
  const store = createStoreCopy(askReducer, initialState);

  //dispatch acceptAsk action to store with ask id
  store.dispatch(rejectAsk(1));

  //examine the state of the store
  var actual = store.getState();

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
