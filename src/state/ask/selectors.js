export const pointValues = {
  accepted: 1,
  rejected: 10,
  unanswered: 0
};

export function getAsks(state) {
  return state.asks;
}

export const getViewState = state =>
  Object.assign({}, state, {
    pointTotal: state.asks.reduce(
      (acc, ask) => (acc += pointValues[ask.status]),
      0
    )
  });
