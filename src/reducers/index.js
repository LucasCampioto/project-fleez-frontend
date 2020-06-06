import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import goals from './goal'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    goals,
  });