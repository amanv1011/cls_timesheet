import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
// import initState from "./initialState";
import rootReducer from "./reducers";

const middleware = [thunk];
middleware.push(createLogger({ collapsed: true }));
const enhancers = compose();
// applyMiddleware(...middleware),
// typeof window !== "undefined" && window.devToolsExtension
//   ? window.devToolsExtension()
//   : (f) => f
// composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(
  rootReducer,
  {},
  // enhancers

  composeWithDevTools(applyMiddleware(...middleware))
  // __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const store = createStore(rootReducer, initState)
export default store;
