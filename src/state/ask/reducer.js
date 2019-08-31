import { askActions } from "./actions";

const initialState = {
  asks: []
};

export function askReducer(state = initialState, action = {}) {
  switch (action.type) {
    case askActions.ADD_ASK:
      return Object.assign({}, state, {
        asks: state.asks.concat(action.payload)
      });
    case askActions.ACCEPT_ASK:
      return Object.assign({}, state, {
        asks: state.asks.map(ask =>
          ask.id === action.payload ? { ...ask, status: "accepted" } : ask
        )
      });
    case askActions.REJECT_ASK:
      return Object.assign({}, state, {
        asks: state.asks.map(ask =>
          ask.id === action.payload ? { ...ask, status: "rejected" } : ask
        )
      });
    default:
      return state;
  }
}
