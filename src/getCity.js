const getCity = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  const { city } = data;
  return city;
};

export default getCity;
