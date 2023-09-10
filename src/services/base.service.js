import store from "../store";
import axios from "axios";
import { clearCurrentUser } from "../store/action/user";

export const authHeader = () => {
  const currentUser = store.getState().user;

  return {
    "Content-Type": "application/json",
    authorization: "Bearer " + currentUser?.token,
  };
};

export function handleResponseWithLoginCheck() {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      const currentUser = store.getState().user;
      const isLoggedIn = currentUser?.token;
      const status = error?.response?.status;

      if (isLoggedIn || [500, 401].includes(status)) {
        console.log("error");
        store.dispatch(clearCurrentUser());
      }

      return Promise.reject(error);
    }
  );
}
