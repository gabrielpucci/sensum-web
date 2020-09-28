import { Action, ThunkAction } from "@reduxjs/toolkit";
import { sensationsSlice } from "./Sensations/slice";

export const appReducer = sensationsSlice.reducer;

// https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type
export type RootState = ReturnType<typeof appReducer>;

export type Event<R = void> = ThunkAction<
  Promise<R>, //return Type of event dispatch
  RootState, //slice state type
  void, // extraArgument type (always void)
  Action<string> //event action type (always Action<string>)
>;
