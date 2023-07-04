const convertToCelsius = function (fahr) {
  let cels = (fahr - 32.0) * 5.0 / 9.0;
  return parseFloat(cels.toFixed(1));
};

const convertToFahrenheit = function (cels) {
  let fahr = (cels * 9.0 / 5.0) + 32.0;
  return parseFloat(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
