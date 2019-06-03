import { Map, List } from "immutable";
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actions";

const initialState = Map({
  weatherData: Map({}),
  loading: true,
  failureMessage: ""
});

const fetchingData = state =>
  state
    .set("loading", true)
    .set("failureMessage", "")
    .set("weatherData", null);

const updateData = (state, { response }) =>
  state.set("loading", false).set("weatherData", response);

const updateFailure = (state, { error }) =>
  state.set("loading", false).set("failureMessage", error);

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return fetchingData(state, action);
    case FETCH_DATA_SUCCESS:
      return updateData(state, action);
    case FETCH_DATA_FAILURE:
      return updateFailure(state, action);
    default:
      return state;
  }
};
