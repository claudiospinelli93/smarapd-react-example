import React, { Component } from "react";
import _ from "lodash";

import { DDadosComboBox, DDadosText } from "@common/components/ddados";

class DDadosItem extends Component {

  constructor(props){
    super(props);

    this.refComponent = React.createRef();
  }

  getValue(){
    return this.refComponent.current.state.value;
  }

  render() {    
    switch (this.props.Tipo) {
      case "text":
        return <DDadosText ref={this.refComponent} {...this.props} />;
      case "combobox":
        return <DDadosComboBox ref={this.refComponent} {...this.props} />;
      default:
        return <span>Componente não Econtrado</span>;
    }
  }
}

export default DDadosItem;
