import CONFIG from "../config";

const getWeather = (lat, lng) => {
  const { PROXY, KEY_DARKSKY } = CONFIG;
  return fetch(
    `${PROXY}https://api.darksky.net/forecast/${KEY_DARKSKY}/${lat},${lng}?units=auto`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log("error", error));
};

export default getWeather;
