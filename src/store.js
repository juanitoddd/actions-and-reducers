import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./Weather.reducers";

const rootReducers = combineReducers({
  cityWeather: weatherReducer
});

const middlewares = [thunk];

export default createStore(rootReducers, compose(applyMiddleware(thunk)));
