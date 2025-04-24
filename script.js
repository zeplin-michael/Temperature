let Fahrenheit = Number(prompt("Please enter a temperature in Fahrenheit?"));

function convertToCelsius(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
}

console.log(convertToCelsius(Fahrenheit));

function describeTemperature(Fahrenheit) {
  if (Fahrenheit < 0) {
    console.log("Very Cold");
  } else if (Fahrenheit < 20) {
    console.log("Cold");
  } else if (Fahrenheit < 30) {
    console.log("Warm");
  } else if (Fahrenheit < 40) {
    console.log("Hot");
  } else if (40 <= Fahrenheit) {
    console.log("Very Hot");
  } else {
    console.log("No number detected!");
  }
}

console.log(describeTemperature(Fahrenheit));
