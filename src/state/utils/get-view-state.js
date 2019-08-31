export const getViewState = state =>
  Object.assign({}, state, {
    // return a list of asks for now
    asks: [...new Set(state.asks.map(ask => ask))]
  });
