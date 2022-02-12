import axios from "axios";

const PORT = 8080;
const endpoint = `http://localhost:${PORT}/tutorials`;

let getTutorials = () => {
  const config = {
    method: "GET",
    url: endpoint,
  };
  return axios(config);
};

export { getTutorials };
