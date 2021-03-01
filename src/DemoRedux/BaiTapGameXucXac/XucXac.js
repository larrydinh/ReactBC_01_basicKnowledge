import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <button style={{ border: "none" }} className="bg-danger">
              <div
                className="p-5 bg-danger text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                Tai
              </div>
            </button>
          </div>
          <div className="col-4">
              <img src="./img/1.png" width="50" />
              <img src="./img/1.png" width="50" />
              <img src="./img/1.png" width="50" />
          </div>
          <div className="col-4">
            <button style={{ border: "none" }} className="bg-dark">
              <div
                className="p-5 bg-danger text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                Xiu 
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
