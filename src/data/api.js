import { fetchData, fetchDataSuccess, fetchDataFailure } from "./actions";
import dummyData from "./dummyData";

// export const fetchWeatherData = () => {
//   return dispatch => {
//     dispatch(fetchData());
//     return fetch(`https://api.myjson.com/bins/6iv3y`)
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchDataSuccess(json));
//         return json;
//       })
//       .catch(error => dispatch(fetchDataFailure(error.message)));
//   };
// };

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

export const fetchWeatherData = () => {
  return dispatch => {
    dispatch(fetchData("Munich"));
    dispatch(fetchDataSuccess(dummyData));
  };
};
