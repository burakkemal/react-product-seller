import { BASE_URL } from "../common/constant";
import axios from "axios";
import { authHeader } from "./base.service";

const API_URL = BASE_URL + "/api/user";

class UserService {
  changeRole(role) {
    return axios.put(
      API_URL + "/change/" + role,
      {},
      { headers: authHeader() }
    );
  }
}

export default new UserService();
