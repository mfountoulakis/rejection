import { createStore } from "redux";

export const createAsk = ({
  id = 0,
  timeStamp = 1472322852680,
  askee = "",
  question = "",
  status = "unanswered"
} = {}) => ({
  id,
  timeStamp,
  askee,
  question,
  status
});

export const createState = ({ asks = [] } = {}) => ({
  asks
});
