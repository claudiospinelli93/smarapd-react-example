import baseService from "@common/services/base.service";
import store from "@/store/store";
import qs from "qs";

const host = window.location.hostname;
const accessControl = "http://backoffice.smarapd.com.br/acserver";
const common = "http://backoffice.smarapd.com.br/commonserver";
const authorization = "http://" + host + ":9092";

let http = baseService(store);

const apiDef = {
  sistema: {
    getAll() {
      return http.get(accessControl + "/sistema");
    }
  },
  provedor: {
    getAll() {
      return http.get(common + "/provedorsms/ativos");
    }
  },
  modulos: {
    getAll(id, local) {
      return http.get(`${common}/modulo/getbyidsistema/${id}?local=${local}`);
    }
  },
  configuracao: {
    getByIdModulo(idModulo) {
      return http.get(`${common}/configuracaosms/getbymodulo/${idModulo}`);
    },
    update(data) {
      return http.put(`${common}/configuracaosms`, data);
    }
  }
};

export default apiDef;
