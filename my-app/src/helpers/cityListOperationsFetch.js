import getCityInfo from "./getCityInfo";

const cityListOperationsFetch =  async (flag, cityList, id,city, coordinates) => {
    const cityListCopy = cityList.slice();

  if (flag === "add") {
    const cityInfoObj = await getCityInfo(city, coordinates);
    cityListCopy.push(cityInfoObj);
    return cityListCopy;
  }

  if (flag === "delete") {
    const indexCard = cityListCopy.findIndex((item) => item.id === +id);
    cityListCopy.splice(indexCard, 1);
    return cityListCopy;
  }

  if(flag === "update"){
    const index = cityListCopy.findIndex((item) => item.id === +id);
    const city = cityListCopy[index].name;
    const { coordinates } = cityListCopy[index];
    const cityInfoObj =  await getCityInfo(city, coordinates);
    cityListCopy.splice(index, 1, cityInfoObj);
    return cityListCopy;
  }
};

export default cityListOperationsFetch;
