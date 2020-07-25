import React from "react";
import "./styles/PageError.css";

function PageError({ error: { message } }) {
  return <div className="PageError">{message}</div>;
}

export default PageError;
