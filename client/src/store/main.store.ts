import {
  configureStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";

import appStateReducer from "./appState/app-state-slice";
import CartReducer from "./cart/cart-slice";

const rootReducer = combineReducers({
  cart: CartReducer,
  appState: appStateReducer,
});
// const store = configureStore({
//   reducer: {
//     appState: appStateReducer,
//     cart: CartReducer,
//   },
// });
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

// export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
