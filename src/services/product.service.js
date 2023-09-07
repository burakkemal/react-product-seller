import axios from "axios";
import { BASE_URL } from "../common/constant.js";
import { authHeader } from "./base.service.js";
import Product from "../models/product.js";
const API_URL = BASE_URL + "/api/product";

class ProductService {
  saveProduct(product) {
    console.log("Product saved " + JSON.stringify(product));
    return axios.post(API_URL, { headers: authHeader() });
  }

  deleteProduct(product) {
    return axios.delete(API_URL, +"/" + product.id, { headers: authHeader() });
  }

  getAllProduct() {
    return axios.get(API_URL);
  }
}

export default new ProductService();
