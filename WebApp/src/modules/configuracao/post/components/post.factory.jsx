import _ from "lodash";
import * as postReducer from "../store/post.reducer";
import postActions from "../store/post.actions";

import BaseComponent from "@common/components/BaseComponent";

import alertAction from "@common/store/alert/alert.actions";
import * as commonActionType from "@common/store/common/common.actionsType";

import DDados from "../post.ddados";

class Factory extends BaseComponent {
  constructor(props) {
    super(props, DDados);    
  }

  
  // Lifecycle Events
  componentDDadosMount(){
    this.setDDados("Pequisa", {
      valueField: "Id",
      textField: "Nome",
    });


  }

  componentDidMount() {
    this.props.fetchPost();
  }

}

function mapStateToProps(state) {
  return {
    data: postReducer.getConfiguracao(state),
    posts: postReducer.getPosts(state)
  };
  
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: () => dispatch(postActions.fetchPost()),
  };
};

export { Factory, mapStateToProps, mapDispatchToProps};
