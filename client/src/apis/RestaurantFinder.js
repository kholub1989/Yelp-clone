import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030/api/v1/restaurants",
});
