const form = document.querySelector("form");

const datalist = document.getElementById("data-list");
const fragment = document.createDocumentFragment();

const oldData = localStorage.getItem("Cities");
const parseData = JSON.parse(oldData);

parseData.forEach((car) => {
  const option = document.createElement("option");
  const text = document.createTextNode(car);

  option.value = car;
  option.appendChild(text);
  fragment.appendChild(option);
});

datalist.appendChild(fragment);
