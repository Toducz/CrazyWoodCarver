import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class GroupService {

  joinGroup(groupCode) {
    return axios
      .post(API_URL + "joinGroup", {groupCode}, { headers: authHeader() })
  }

  /*
  leaveGroup(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }*/
}

export default new GroupService();
