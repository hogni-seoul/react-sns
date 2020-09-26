import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

// redux
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

function App({ Component }) {
  return <Component />;
}

export default wrapper.withRedux(withReduxSaga(App));
