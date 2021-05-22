import API_URL from "../Constants/urlConstants";

const CreateEndpoint = async () => {
  const data = await fetch(API_URL.EndpointUrl, {
      method: "POST",
  });
  const jsonData = await data.json();
  return jsonData;
};

export default CreateEndpoint;
