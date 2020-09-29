import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sensation } from "../../Model/Sensation";

interface InitialState {
  sensations: Array<Sensation>;
}

const initialState: InitialState = {
  sensations: [],
};

export const sensationsSlice = createSlice({
  name: "sensations",
  initialState,
  reducers: {
    receiveSensations: (state, action: PayloadAction<Array<Sensation>>) => {
      state.sensations = action.payload;
    },
  },
});
