import axios from "axios";

const endpoint =
  "https://dev-training-ground-server.herokuapp.com/api/v1/tutorials";

let getTutorials = () => {
  const config = {
    method: "GET",
    url: endpoint,
  };
  return axios(config);
};

export { getTutorials };
