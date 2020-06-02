import React, { Component } from "react";
import Api from "./api";
class buscador extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <h2>Type Pokemon</h2>
        </div>
        <div className="row">
          <select className="form-control form-control-lg">
            <Api />
          </select>
        </div>
      </div>
    );
  }
}

export default buscador;
