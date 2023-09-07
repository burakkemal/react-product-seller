import axios from "axios";
import { BASE_URL } from "../common/constant";
import { authHeader } from "./base.service";

const API_URL = BASE_URL + "/api/purchase";
class Purhcase {
  savePurchase = (purchase) => {
    console.log(API_URL);
    return axios
      .post(API_URL, purchase, { headers: authHeader() })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  getAllPurchaseItems() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new Purhcase();
