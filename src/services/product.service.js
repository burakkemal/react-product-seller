import axios from "axios";
import { BASE_URL } from "../common/constant.js";
import { authHeader } from "./base.service.js";
const API_URL = BASE_URL + "/api/product";

class ProductService {
  saveProduct(product) {
    return axios.post(API_URL, product, { headers: authHeader() });
  }

  deleteProduct(product) {
    return axios.delete(API_URL + "/" + product.id, { headers: authHeader() });
  }

  getAllProduct() {
    return axios.get(API_URL);
  }
}

export default new ProductService();
