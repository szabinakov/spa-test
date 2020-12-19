import React from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";

export default function Alert({ message, success }) {
  if (!message) return null;
  return (
    <div className="alertContainer">
      <div className={`alert-${success ? "success" : "error"}`}>{message}</div>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
