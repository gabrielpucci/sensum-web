import { getSensations } from "../../API/sensumAPI";
import { Event } from "../util";
import { sensationsSlice } from "./slice";

const actions = sensationsSlice.actions;

export const loadAllSensations = (): Event => async (dispatch) => {
  try {
    const sensations = await getSensations();
    dispatch(actions.receiveSensations(sensations));
  } catch (e) {
    alert(e);
  }
};
