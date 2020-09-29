import { awakenTheOracle, getSensations } from "../../API/sensumAPI";
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

export const pray = (): Event => async (dispatch) => {
  try {
    const oracleResponse = await awakenTheOracle();
    const responseText = await oracleResponse?.json();
    alert(responseText);
  } catch (e) {
    alert(e);
  }
};
