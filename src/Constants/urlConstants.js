const BASE_URL = "https://terminalurl.herokuapp.com";

const API_URL = {
  EndpointUrl: `${BASE_URL}/terminal/endpoint/`,
  EndpointDetailUrl: (url) =>
  `${BASE_URL}/terminal/endpoint/${url}/`,
};

export default API_URL;
