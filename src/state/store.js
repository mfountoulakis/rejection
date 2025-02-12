import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import reducers from "./reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage
};

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig, reducers);

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const mids = process.env.NODE_ENV === "development" ? [logger] : [];

  const middleware = applyMiddleware(...mids);

  const enhancer = composeEnhancers(middleware);
  // other store enhancers if any

  const store = createStore(persistedReducer, enhancer);

  // Middleware: Redux Persist Persister
  let persistor = persistStore(store);

  return { store, persistor };
}
