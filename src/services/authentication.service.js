import axios from "axios";
import { BASE_URL } from "../common/constant";
import { json } from "react-router-dom";

const BASE_API_URL = BASE_URL + "/api/authentication";
class AuthenticationService {
  login(user) {
    return axios.post(BASE_API_URL + "/sign-in", user);
  }

  register(user) {
    console.log("Register " + JSON.stringify(user));
    return axios.post(BASE_API_URL + "/sign-up", user);
  }
}
export default new AuthenticationService();
