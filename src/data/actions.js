// API actions
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => ({
  type: FETCH_DATA
});

export const fetchDataSuccess = response => ({
  type: FETCH_DATA_SUCCESS,
  response
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  error
});
