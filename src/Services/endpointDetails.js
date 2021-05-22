import API_URL from "../Constants/urlConstants";

const EndpointsList = async (endpoint) => {
  const data = await fetch(API_URL.EndpointDetailUrl(endpoint));
  if(data.status != 200){
      return {'message': 'Please provide valid url'}
  }
  const jsonData = await data.json();
  return jsonData;
};

export default EndpointsList;
