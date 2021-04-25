const calcMaxMinTemp = (cityList, flag) => {
  const temperatureObj = cityList.reduce((accumulator, currentValue) => {
    const condition =
      flag === "maxTemperature"
        ? accumulator.temperature > currentValue.temperature
        : accumulator.temperature < currentValue.temperature;

    if (condition) {
      return accumulator;
    } else {
      return currentValue;
    }
  });

  return { city: temperatureObj.name, temperature: temperatureObj.temperature };
};

export default calcMaxMinTemp;
