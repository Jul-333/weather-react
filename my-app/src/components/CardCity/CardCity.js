import React, { Component } from "react";
import Button from "../Button/Button";
import ListInfoCity from "../ListInfoCity/ListInfoCity";
import "./CardCity.css";

const CardCity = ({ cityList, deleteCard, updateCard }) => {
  const { id } = cityList;

  return (
    <div className="card-city">
      <ListInfoCity cityList={cityList} />
      <div className="wrapper-btn-city">
        <Button
          click={deleteCard}
          style={"btn-delete btn-city"}
          name={"DELETE"}
          id={id}
        />
        <Button
          click={updateCard}
          style={"btn-update btn-city"}
          name={"UPDATE"}
          id={id}
        />
      </div>
    </div>
  );
};

export default CardCity;
