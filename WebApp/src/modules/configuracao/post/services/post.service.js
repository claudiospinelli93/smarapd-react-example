import baseService from "@common/services/base.service";
import store from "@/store/store";
import qs from "qs";

const common = "https://jsonplaceholder.typicode.com";

let http = baseService(store);

const apiDef = {
  post: {
    getAll() {
      return http.get(common + "/posts");
    }
  },
};

export default apiDef;
