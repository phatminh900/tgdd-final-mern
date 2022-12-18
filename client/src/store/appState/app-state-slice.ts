import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/main.store";

interface AppState {
  isLoading: boolean;
  error: null | string;
  isSuccess: boolean;
}
const initialState: AppState = {
  isLoading: false,
  error: null,
  isSuccess: false,
};
const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsLoading(state: AppState) {
      state.isLoading = true;
    },

    setFinishLoading(state: AppState) {
      state.isLoading = false;
    },
    setError(state: AppState, action: PayloadAction<any>) {
      state.error = action.payload;
    },
    setIsSuccess(state: AppState) {
      state.isSuccess = true;
    },
    resetState(state: AppState) {
      state.error = null;
      // state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

export const appStateActions = appStateSlice.actions;
export const selectAppState = (root: RootState) => root.appState;
export const selectStateErr = (root: RootState) => root.appState.error;
export const selectStateSuccess = (root: RootState) => root.appState.isSuccess;
export const selectStateLoading = (root: RootState) => root.appState.isLoading;
export default appStateSlice.reducer;
