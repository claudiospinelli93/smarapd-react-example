import React, { Component } from "react";

import * as loaderReducer from "@common/store/loader/loader.reducer";

class LoaderContainer extends Component {
  componentDidUpdate() {
    if (this.props.loading) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }

  render() {
    if (this.props.loading)
      return (
        <div tabIndex="-1" className="loading-screen-blocker">
          <div className="loadingContent">
            <div>
              <span>Carregando...</span>
            </div>
            <div>
              <img src="http://backoffice.smarapd.com.br/images/loading-signup.gif" />
            </div>
          </div>
        </div>
      );
    else return <span />;
  }
}

function LoaderStateToProps(state) {
  return {
    loading: loaderReducer.isLoading(state)
  };
}

export { LoaderContainer, LoaderStateToProps };
