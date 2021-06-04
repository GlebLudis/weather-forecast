import name from "./getWeather.js";

async function datalist() {
  const oldData = localStorage.getItem("Cities");
  const parseData = JSON.parse(oldData);
  if (parseData.length > 9) {
    parseData.splice(0, 1);
  }

  const newCity = JSON.stringify(name);
  const newStrCity = newCity.split('"').join("");

  const compare = parseData.includes(newStrCity);
  if (compare === true) {
    console.error("Ok");
  } else if (compare === false) {
    parseData.push(newStrCity);
    localStorage.setItem("Cities", JSON.stringify(parseData));
  }

  console.log(parseData);
  let str = "";

  parseData.forEach((cities) => {
    str += `<option value="${cities}" />`;
  });

  const dataList = document.getElementById("data-list");
  dataList.innerHTML = str;
}

export default datalist;
