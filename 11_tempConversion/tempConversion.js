const convertToCelsius = function(tempF) {
  let value = (tempF - 32) * 5/9;
  tempInC = Math.round((value * 10))/10;
  return tempInC;
};

const convertToFahrenheit = function(tempC) {
  let value = (tempC * 9/5 + 32);
  tempInF = Math.round((value * 10))/10;
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
