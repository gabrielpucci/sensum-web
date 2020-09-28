import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sensation } from "../../Model/Sensation";

const initialState: Array<Sensation> = [];

export const sensationsSlice = createSlice({
  name: "sensations",
  initialState,
  reducers: {
    receiveSensations: (_state, action: PayloadAction<Array<Sensation>>) =>
      action.payload,
  },
});
