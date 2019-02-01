export default {
  Titulo: "SMS",
  Campos: {
    Sistema: {
      Tipo: "combobox",
      Label: "Sistema",
      Tooltip: "Sistema",
      Obrigatorio: true
    },
    Modulo: {
      Tipo: "combobox",
      Label: "Módulo",
      Tooltip: "Módulo"
    },
    Provedor: {
      Tipo: "combobox",
      Label: "Provedor do Serviço",
      Tooltip: "Provedor do Serviço",
      Placeholder: "Provedor do Serviço"
    },
    Usuario: {
      Tipo: "text",
      Label: "Usuário para Autenticação",
      Tooltip: "Usuário para Autenticação",
      Placeholder: "Usuário para Autenticação"
    },
    Senha: {
      Tipo: "text",
      Label: "Senha para Autenticação",
      Tooltip: "Senha para Autenticação",
      TipoInput: "password"
    }
  }
};
