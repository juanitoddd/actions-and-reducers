import { CHANGE_CITY } from "./Weather.actions";

const initialState = {
  city: "---",
  weather: 0,
  humidity: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        city: action.data.city,
        weather: action.data.weather,
        humidity: action.data.humidity,
      };
      // NOTE: this could also be posible:
      // return action.weather
    default:
      return state;
  }
};
