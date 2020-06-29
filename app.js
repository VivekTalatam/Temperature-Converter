document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const unit = document.querySelector("select").value;

    let temperatureValue = document.querySelector("#user-input").value;
    temperatureValue = temperatureValue.replace(/,/g, ".");
    temperatureValue = parseFloat(temperatureValue).toFixed(2);

    if (isNaN(temperatureValue)) {
      return alert("Please enter a Number");
    }
    let convertedValue;
    if (unit === "C") {
      convertedValue = (temperatureValue * 9) / 5 + 32;
      convertedValue = convertedValue.toFixed(2);
      document.querySelector(
        "#result"
      ).innerText = `The result is ${convertedValue} °F `;
    } else {
      convertedValue = ((temperatureValue - 32) * 5) / 9;
      convertedValue = convertedValue.toFixed(2);
      document.querySelector(
        "#result"
      ).innerText = `The result is ${convertedValue} °C `;
    }
  });
});
