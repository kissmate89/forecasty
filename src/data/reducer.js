import { Map } from "immutable";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  UPDATE_TEMP_UNIT
} from "./actions";
import { TEMP_UNITS } from "./constants";

const initialState = Map({
  weatherData: Map({}),
  isLoading: true,
  failureMessage: "",
  tempUnit: TEMP_UNITS.CELSIUS
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

const updateTempUnit = (state, { unit }) => state.set("tempUnit", unit);

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return fetchingData(state, action);
    case FETCH_DATA_SUCCESS:
      return updateData(state, action);
    case FETCH_DATA_FAILURE:
      return updateFailure(state, action);
    case UPDATE_TEMP_UNIT:
      return updateTempUnit(state, action);
    default:
      return state;
  }
};
