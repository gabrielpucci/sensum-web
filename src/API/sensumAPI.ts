const BASE_URL = "https://sensum-server.herokuapp.com/api/";

export const getSensations = async () => {
  try {
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
    return fetch(request);
  } catch (e) {
    console.error(e);
  }
};
