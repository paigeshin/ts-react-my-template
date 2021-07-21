import { createStore, applyMiddleware } from "redux";
import RootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/** Production Code **/
// // initialize current state from redux store for subscription comparison
// // preventing undefined error
// let currentState = store.getState();

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;
//   currentState = store.getState();
//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const token = currentState.auth.token;
//     setAuthToken(token);
//   }
// });

/** Development Code **/
store.subscribe(() => {
  const currentState = store.getState();
  const data = JSON.stringify(currentState);
  localStorage.setItem("state", data);
});

export type RootStore = ReturnType<typeof RootReducer>;
export default store;
