const calcMinTemp = (cityList) => {
  const minTempObj = cityList.reduce((accumulator, currentValue) => {
    if (accumulator.temperature < currentValue.temperature) {
      return accumulator;
    } else {
      return currentValue;
    }
  });
  return { cityMin: minTempObj.name, temperatureMin: minTempObj.temperature };
};

export default calcMinTemp;
