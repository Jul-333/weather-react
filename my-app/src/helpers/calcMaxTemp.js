const calcMaxTemp = (cityList) => {
  const maxTempObj = cityList.reduce((accumulator, currentValue) => {
    if (accumulator.temperature > currentValue.temperature) {
      return accumulator;
    } else {
      return currentValue;
    }
  });
  return { cityMax: maxTempObj.name, temperatureMax: maxTempObj.temperature };
};

export default calcMaxTemp;
