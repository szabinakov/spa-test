import React from "react";
import PropTypes from "prop-types";

export default function Alert({ message, success }) {
  if (!message) return null;
  return (
    <div className={`alert-${success ? "success" : "error"}`}>{message}</div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
