import PropTypes from 'prop-types'; 
import React from "react";

function prefix(type) {
  switch (type) {
    case "C":
      return "Configuração de ";

    default:
      return type;
  }
}

const DDadosTitle = props => {
  return (
    <h2 className="func-name">
      {prefix(props.prefix)} {props.title}
    </h2>
  );
};

DDadosTitle.propTypes = {
  prefix: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default DDadosTitle;
