import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import reducers from "./reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage
};

export default function configureStore() {
  let middleware = applyMiddleware(logger);
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, middleware);

  // Middleware: Redux Persist Persister
  let persistor = persistStore(store);

  window.store = store;

  return { store, persistor };
}
