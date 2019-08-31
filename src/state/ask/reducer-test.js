import test from "tape";
import { createState } from "./reducer-factories";
import { askReducer } from "./reducer";

test("A passing test, test", assert => {
  assert.pass("This test will pass.");
  assert.end();
});

test("init ask reducer with no arguments", ({ same, end }) => {
  const msg = "should return correct default state";

  const actual = askReducer();
  const expected = createState();

  same(actual, expected, msg);
  end();
});
