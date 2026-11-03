const convertToCelsius = function(num) {
  if (!Number.isFinite(num)) {return "ERROR"}
  let celcToFar = (num - 32) * 5 / 9
  celcToFar = +celcToFar.toFixed(1)
  return celcToFar
};

const convertToFahrenheit = function(num) {
  if (!Number.isFinite(num)) {return "ERROR"}
  let farToCelc = (num * 1.8) + 32
  farToCelc = +farToCelc.toFixed(1)
  return farToCelc
};

console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
