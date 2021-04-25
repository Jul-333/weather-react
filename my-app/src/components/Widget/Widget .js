import React from "react";
import calcMaxMinTemp from "../../helpers/calcMaxMinTemp";
import "./Widget.css";

const Widget = ({ cityList }) => {
  const { city: cityMin, temperature: temperatureMin } = calcMaxMinTemp(
    cityList,
    "minTemperature"
  );
  const { city: cityMax, temperature: temperatureMax } = calcMaxMinTemp(
    cityList,
    "maxTemperature"
  );

  return (
    <div className="widget-wrapper">
      <p>
        MIN : {cityMin} ({temperatureMin} &#8451;)
      </p>
      <p>
        MAX : {cityMax} ({temperatureMax} &#8451;)
      </p>
    </div>
  );
};

export default Widget;
