import { TEMP_UNITS } from "./constants";

export const changeTemperature = (temp, unit) => {
  switch (unit) {
    case TEMP_UNITS.CELSIUS:
      return Math.floor(temp - 273.15);
    case TEMP_UNITS.FAHRENHEIT:
      return Math.floor(temp * (9 / 5) - 459.67);
    default:
      return Math.floor(temp - 273.15);
  }
};

export const setDateString = (date, short = false) => {
  const dateObj = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  if (!short) {
    options.year = "2-digit";
  }
  return new Intl.DateTimeFormat("en-GB", options).format(dateObj);
};
