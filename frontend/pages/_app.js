import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

function App({ Component }) {
  return <Component />;
}

export default App;
