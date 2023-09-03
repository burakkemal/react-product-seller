import axios from "axios";
import { BASE_URL } from "../common/constant";

const BASE_API_URL = BASE_URL + "/api/authentication";
class AuthenticationService {
  login(user) {
    return axios.post(BASE_API_URL + "/sign-in", user);
  }

  register(user) {
    return axios.post(BASE_API_URL + "/sign-up", user);
  }
}
export default new AuthenticationService();
