import { fetchData, fetchDataSuccess, fetchDataFailure } from "./actions";
// import dummyData from "./dummyData";

const API_KEY = "77897b8740357a1cb057e7fe604fcf2f";

export const fetchWeatherData = () => {
  return dispatch => {
    dispatch(fetchData());
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Bristol,uk&APPID=${API_KEY}`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchDataFailure(error.message)));
  };
};

// Handle HTTP errors since fetch won't.
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/*
 ** data fetch for testing purposes
 */

// export const fetchWeatherData = () => {
//   return dispatch => {
//     dispatch(fetchData());
//     dispatch(fetchDataSuccess(dummyData));
//   };
// };
