const setLocalStorage = (cityList) => {
  if (cityList.length === 0) {
    return localStorage.clear();
  }
  const nameCityArr = [];
  cityList.forEach((item) => {
    nameCityArr.push(item.name);
  });
  const nameCityJson = JSON.stringify(nameCityArr);
  const cityListJson = JSON.stringify(cityList);
  localStorage.setItem("nameList", nameCityJson);
  localStorage.setItem("weatherList", cityListJson);
};

export default setLocalStorage;
