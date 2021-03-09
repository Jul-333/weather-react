import getWeather from "../API/getWeather";
import { getIconWind } from "./getIcon";

const getCityInfo = async (city, coordinates) => {
  const [lat, lng] = coordinates;
  const result = await getWeather(lat, lng);
  const windDirectionIcon = getIconWind(result.currently.windBearing);
  const updateTime = new Date().toLocaleString("en-AU", {
    hour12: false,
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const id = Date.now();
  const humidity = result.currently.humidity * 100;

  const infoCityWeather = {
    id,
    updateTime,
    name: city,
    humidity,
    coordinates,
    windBearing: windDirectionIcon,
    temperature: Math.round(result.currently.temperature),
    pressure: Math.round(result.currently.pressure),
    windSpeed: Math.round(result.currently.windSpeed),
    iconName: result.currently.icon,
  };
  return infoCityWeather;
};

export default getCityInfo;
