import {
  ApiSensation,
  fromApiSensationToSensation,
  Sensation,
} from "../Model/Sensation";

const BASE_URL = "https://sensum-server.herokuapp.com/api/";

export const getSensations = async (): Promise<Array<Sensation>> => {
  const url = BASE_URL + "sensations/letThemFLow";
  const request = new Request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      offset: 0,
      limit: 0,
    }),
  });
  try {
    const sensationsRes = await fetch(request);
    const apiSensations: Array<ApiSensation> = await sensationsRes.json();
    return apiSensations.map(fromApiSensationToSensation);
  } catch (e) {
    console.error(e);
  }
  return [];
};

export const awakenTheOracle = async (): Promise<Response | undefined> => {
  const url = BASE_URL + "sensations/praiseTheSun";
  const request = new Request(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  try {
    return fetch(request);
  } catch (e) {
    console.error(e);
  }
};
