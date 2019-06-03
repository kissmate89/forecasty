import { Map } from "immutable";
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actions";

const initialState = Map({
  weatherData: Map({}),
  isLoading: true,
  failureMessage: ""
});

const fetchingData = state =>
  state
    .set("isLoading", true)
    .set("failureMessage", "")
    .set("weatherData", null);

const updateData = (state, { response }) =>
  state.set("isLoading", false).set("weatherData", response);

const updateFailure = (state, { error }) =>
  state.set("isLoading", false).set("failureMessage", error);

export default (state = initialState, action) => {
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
