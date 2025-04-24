let Fahrenheit = Number(prompt("Please enter a temperature in Fahrenheit?"));
console.log(Fahrenheit + " Fahrenheit");

function convertToCelsius(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
}
console.log(convertToCelsius(Fahrenheit) + " Celsius");

function describeTemperature(Fahrenheit) {
  if (convertToCelsius(Fahrenheit) < 0) {
    console.log("Very Cold");
  } else if (convertToCelsius(Fahrenheit) < 20) {
    console.log("Cold");
  } else if (convertToCelsius(Fahrenheit) < 30) {
    console.log("Warm");
  } else if (convertToCelsius(Fahrenheit) < 40) {
    console.log("Hot");
  } else if (40 <= convertToCelsius(Fahrenheit)) {
    console.log("Very Hot");
  } else {
    console.log("No number detected!");
  }
}

describeTemperature(Fahrenheit);
