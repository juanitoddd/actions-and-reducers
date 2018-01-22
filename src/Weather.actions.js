import axios from "axios";

export const CHANGE_CITY = "CHANGE_CITY";

export function getCityWeather(_city) {
  return dispatch => {
    return axios({
      method: "GET",
      url: `http://localhost:8080/cities/${_city}.json`,
      headers: {
        "Content-Type": "application/json"
      },
      json: true
    })
      .then(_response => {
        return dispatch({ type: CHANGE_CITY, data: _response.data });
      })
      .catch(err => {
        console.error(err);
      });
  };
}
