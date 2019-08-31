import cuid from "cuid";

export const askActions = {
  ADD_ASK: "ASK::ADD_ASK"
};

export const addAsk = ({
  // see usecuid.org
  id = cuid(),
  timeStamp = Date.now(),
  askee = "anonymous",
  question = "",
  status = "pending"
} = {}) => ({
  type: askActions.ADD_ASK,
  payload: { id, timeStamp, askee, question, status }
});
