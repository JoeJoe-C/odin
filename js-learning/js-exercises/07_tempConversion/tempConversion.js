const convertToCelsius = function(fahr) {
	let cels = ((fahr - 32) * (5 / 9));
	if (Number.isInteger(cels) === false) {
		cels = Number(cels.toFixed(1));
	}
	return cels;
};

const convertToFahrenheit = function(cels) {
	let fahr = (cels * (9/5) + 32)
	if (Number.isInteger(fahr) === false) {
		fahr = Number(fahr.toFixed(1));
	}
	return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
