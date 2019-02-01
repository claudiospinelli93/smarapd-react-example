import baseService from "@common/services/base.service";
import store from "@/store/store";
import qs from "qs";

var host = window.location.hostname;

let http = baseService(store, `http://backoffice.smarapd.com.br/authserver/`);

const apiDef = {
  login(data) {
    return http({
      method: "post",
      url: "OAuth20/Token",
      data: qs.stringify({ ...data, 'grant_type': "password" }),
      headers: {
        Authorization: "Basic V2ViU21hckFQRDpXZWJTbWFyQVBE",
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }
};

export default apiDef;
