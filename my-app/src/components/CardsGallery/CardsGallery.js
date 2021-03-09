import React, { Component } from "react";
import CardCity from "../CardCity/CardCity";
import "./CardsGallery.css";

const CardsGallery = ({ cityList, deleteCard, updateCard }) => {
  const addCard = () => {
    return cityList.map((item, index) => (
      <CardCity
        key={item.id}
        cityList={cityList[index]}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
    ));
  };
  return <div className="city-weather-gallery">{addCard()}</div>;
};

export default CardsGallery;
