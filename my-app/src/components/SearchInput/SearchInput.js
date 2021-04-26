import React from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import CONFIG from "../../config";
import "./SearchInput.css";

const SearchInput = ({ addWeather, cityList }) => {
  const chooseCity = (...rest) => {
    const [, lat, lng, city] = rest;
    const isNewCity = !cityList.some((item) => item.name === city);
    if (!isNewCity) {
      alert("ERROR! This city has already been added!");
      return;
    }
    addWeather(city, [lat, lng]);
  };

  return (
    <MapboxAutocomplete
      publicKey={CONFIG.KEY_MAPBOX}
      inputClass="form-control search"
      onSuggestionSelect={chooseCity}
      resetSearch={true}
      placeholder='Enter a city'
    />
  );
};
export default SearchInput;
