import cuid from "cuid";

export const askActions = {
  ADD_ASK: "ASK::ADD_ASK",
  ACCEPT_ASK: "ASK::ACCEPT_ASK",
  REJECT_ASK: "ASK::REJECT_ASK"
};

export const addAsk = ({
  id = cuid(),
  timeStamp = Date.now(),
  askee = "anonymous",
  question = "",
  status = "unanswered"
} = {}) => ({
  type: askActions.ADD_ASK,
  payload: { id, timeStamp, askee, question, status }
});

export const acceptAsk = id => ({
  type: askActions.ACCEPT_ASK,
  payload: id
});

export const rejectAsk = id => ({
  type: askActions.REJECT_ASK,
  payload: id
});
// window.addAsk = addAsk;
// window.acceptAsk = acceptAsk;
