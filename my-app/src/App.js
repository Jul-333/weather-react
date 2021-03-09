import React, { Component } from "react";
import SelectComponent from "./components/Select/Select";
import CardsGallery from "./components/CardsGallery/CardsGallery";
import getCityInfo from "./helpers/getCityInfo";
import Widget from "./components/Widget/Widget ";
import setLocalStorage from "./helpers/setLocalStorage";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";
import "./App.css";

const override = css`
  display: block;
  border-color: blue;
  position: absolute;
  top: calc(50vh - 75px);
  left: calc(50vw - 75px);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      loading: false,
    };
  }

  addWeatherInState = async (city, coordinates) => {
    const { cityList } = this.state;
    this.setState({ loading: true });
    const cityInfoObj = await getCityInfo(city, coordinates);
    this.setState({ loading: false });
    const cityListCopy = cityList.slice();
    cityListCopy.push(cityInfoObj);
    this.setState({ cityList: cityListCopy });
    setLocalStorage(cityListCopy);
  };

  chooseCity = async (...rest) => {
    const { cityList } = this.state;
    const [, lat, lng, city] = rest;
    const isNewCity = !cityList.some((item) => item.name === city);
    if (!isNewCity) {
      alert("ERROR! This city has already been added!");
      return;
    }
    await this.addWeatherInState(city, [lat, lng]);
  };

  deleteCard = (id) => {
    const { cityList } = this.state;
    const cityListCopy = cityList.slice();
    const indexCard = cityListCopy.findIndex((item) => item.id === +id);
    cityListCopy.splice(indexCard, 1);
    this.setState({ cityList: cityListCopy });
    setLocalStorage(cityListCopy);
  };

  updateCard = async (id) => {
    const { cityList } = this.state;
    const cityListCopy = cityList.slice();
    const index = cityListCopy.findIndex((item) => item.id === +id);
    const city = cityListCopy[index].name;
    const { coordinates } = cityListCopy[index];
    const cityInfoObj = await getCityInfo(city, coordinates);
    cityListCopy.splice(index, 1, cityInfoObj);
    this.setState({ cityList: cityListCopy });
    setLocalStorage(cityListCopy);
  };

  render() {
    const { cityList, loading } = this.state;
    const isEmptyCityList = cityList.length === 0;

    return (
      <div className="wrapper-page">
        <div className="wrapper-search-widget">
          <SelectComponent chooseCity={this.chooseCity} />
          {!isEmptyCityList && <Widget cityList={cityList} />}
          <BounceLoader css={override} loading={loading} size={80} />
        </div>
        <CardsGallery
          cityList={cityList}
          deleteCard={this.deleteCard}
          updateCard={this.updateCard}
        />
      </div>
    );
  }
}

export default App;
