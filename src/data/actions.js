// API actions
export const FETCH_DATA = Symbol("FETCH_DATA");
export const FETCH_DATA_SUCCESS = Symbol("FETCH_DATA_SUCCESS");
export const FETCH_DATA_FAILURE = Symbol("FETCH_DATA_FAILURE");

export const fetchData = cityName => ({
  type: FETCH_DATA,
  cityName
});

export const fetchDataSuccess = response => ({
  type: FETCH_DATA_SUCCESS,
  response
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  error
});
