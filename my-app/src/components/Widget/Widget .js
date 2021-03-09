import React, { Component } from "react";
import calcMinTemp from "../../helpers/calcMinTemp";
import calcMaxTemp from "../../helpers/calcMaxTemp";
import "./Widget.css";

const Widget = ({ cityList }) => {
  const { cityMin, temperatureMin } = calcMinTemp(cityList);
  const { cityMax, temperatureMax } = calcMaxTemp(cityList);
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
