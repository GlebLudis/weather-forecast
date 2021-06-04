import getWeather from "./getWeather.js";

async function storage() {
  const data = await getWeather();
  const { main, name, weather } = data;
  const checkData = localStorage.getItem("Cities");
  if (checkData == null) {
    const newData = [];
    const cityStr = JSON.stringify(name);
    const newCity = cityStr.split('"').join("");
    newData.push(newCity);
    localStorage.setItem("Cities", JSON.stringify(newData));
  } else {
    let str = "";
    const oldData = localStorage.getItem("Cities");
    const parseData = JSON.parse(oldData);
    parseData.forEach((cities) => {
      str += `<option value="${cities}" />`;
    });

    const dataList = document.getElementById("data-list");
    dataList.innerHTML = str;
  }
}

export default storage;
