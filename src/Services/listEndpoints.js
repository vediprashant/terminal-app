import API_URL from "../Constants/urlConstants";

const EndpointsList = async () => {
  const data = await fetch(API_URL.EndpointUrl);
  const jsonData = await data.json();
  return jsonData;
};

export default EndpointsList;
