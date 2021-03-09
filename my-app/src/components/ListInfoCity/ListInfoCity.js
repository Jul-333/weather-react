import React from "react";
import { ICONS } from "../../helpers/utils/iconsLibrary";
import { getIconWeather } from "../../helpers/getIcon";
import "./ListInfoCity.css";

const ListInfoCity = ({ cityList }) => {
  const {
    updateTime,
    name,
    windBearing,
    temperature,
    humidity,
    pressure,
    windSpeed,
    iconName,
  } = cityList;

  const iconImg = getIconWeather(iconName);
  return (
    <ul>
      <li className="card-city-item">City: {name}</li>
      <li className="card-city-item">
        Temperature: <span>{temperature} &#8451;</span>{" "}
        <img src={iconImg} alt="icon-weather" className="icon-weather" />
      </li>
      <li className="card-city-item">
        Humidity:<span> {humidity} %</span>
      </li>
      <li className="card-city-item">
        Atmosphere pressure: <span>{pressure}</span>
      </li>
      <li className="card-city-item">
        Wind strength and direction: <span>{windSpeed} M/S</span>{" "}
        <img
          src={ICONS.windDirection}
          alt="wind-icon"
          className="wind-icon"
          style={{ transform: `rotate(${windBearing})` }}
        />
      </li>
      <li className="card-city-item">
        Last data update:<span> {updateTime}</span>
      </li>
    </ul>
  );
};
export default ListInfoCity;
