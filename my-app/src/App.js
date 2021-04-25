import React, { useState, useEffect } from "react";
import SelectComponent from "./components/Select/Select";
import CardsGallery from "./components/CardsGallery/CardsGallery";
import Widget from "./components/Widget/Widget ";
import setLocalStorage from "./helpers/setLocalStorage";
import { Loader } from "./components/Loader/Loader";
import cityListOperationsFetch from "./helpers/cityListOperationsFetch";
import "./App.css";

const App = () => {
  const [cityList, changeCityList] = useState([]);
  const [loading, setLoading] = useState(false);
  const isEmptyCityList = cityList.length === 0;

  useEffect(() => {
    setLocalStorage(cityList);
    return () => localStorage.clear();
  }, [cityList]);

  const addWeather = async (city, coordinates) => {
    setLoading(true);
    const cityListCopy = await cityListOperationsFetch(
      "add",
      cityList,
      null,
      city,
      coordinates
    );
    changeCityList(cityListCopy);
    setLoading(false);
  };

  const deleteCard = async (id) => {
    const cityListCopy = await cityListOperationsFetch("delete", cityList, id);
    changeCityList(cityListCopy);
  };

  const updateCard = async (id) => {
    const cityListCopy = await cityListOperationsFetch("update", cityList, id);
    changeCityList(cityListCopy);
  };

  return (
    <div className="wrapper-page">
      <div className="wrapper-search-widget">
        <SelectComponent addWeather={addWeather} cityList={cityList} />
        {!isEmptyCityList && <Widget cityList={cityList} />}
        <Loader loading={loading} />
      </div>
      <CardsGallery
        cityList={cityList}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
    </div>
  );
};

export default App;
