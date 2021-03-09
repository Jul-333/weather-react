import React from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import CONFIG from "../../config";
import "./Select.css";

const SelectComponent = ({ chooseCity }) => {
  const { KEY_MAPBOX } = CONFIG;
  return (
    <MapboxAutocomplete
      publicKey={KEY_MAPBOX}
      inputClass="form-control search"
      onSuggestionSelect={chooseCity}
      resetSearch={true}
    />
  );
};
export default SelectComponent;
