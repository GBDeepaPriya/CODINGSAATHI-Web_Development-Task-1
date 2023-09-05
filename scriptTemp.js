function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const unitSelect = document.getElementById("unit");
    const resultSpan = document.getElementById("result");

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let unit = unitSelect.value;

    if (unit === "celsius") {
        fahrenheit = (celsius * 9) / 5 + 32;
    } else {
        celsius = ((fahrenheit - 32) * 5) / 9;
    }

    celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
    resultSpan.textContent = `${unit === "celsius" ? "Fahrenheit" : "Celsius"}: ${
    isNaN(celsius) || isNaN(fahrenheit)
      ? "N/A"
      : (unit === "celsius" ? fahrenheit : celsius).toFixed(2)
  }`;
}