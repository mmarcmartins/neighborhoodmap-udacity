import React, { Component } from "react";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <span className="loader-title">Carregando</span>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
