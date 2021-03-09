import { ICONS } from "./utils/iconsLibrary";

export const getIconWind = (deg) => {
  if (deg <= 45) {
    return '134deg';
  }
  if (45 <= deg && deg <= 90) {
    return '178deg';
  }
  if (45 <= deg && deg <= 135) {
    return '214deg';
  }
  if (135 <= deg && deg <= 180) {
    return '267deg';
  }
  if (180 <= deg && deg <= 225) {
    return '317deg';
  }
  if (225 <= deg && deg <= 270) {
    return '0deg';
  }
  if (270 <= deg && deg <= 315) {
    return '41deg';
  }
  if (315 <= deg && deg <= 360) {
    return '90deg';
  }
};

export const getIconWeather = (iconName) => {
  // transform name of icon from API to a name for icon link
  // Ex:"partly-cloudy-night" to "partlyCloudyNight"
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue[0].toUpperCase() + currentValue.slice(1);
  };
  const iconNameLink = iconName.split("-").reduce(reducer);
  return ICONS[iconNameLink];
};
