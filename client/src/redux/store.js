// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

// const store = configureStore({
//   reducer: rootReducer,
// });

// const { dispatch } = store;

// export { store, dispatch };


import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store; // Export the store directly

// Optionally, export dispatch directly as well
export const { dispatch } = store;
