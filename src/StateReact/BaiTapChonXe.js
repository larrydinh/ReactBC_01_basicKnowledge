import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    pic: "./img/car/products/black-car.jpg",
  };

  renderPic = (color) => {
    this.setState({
        pic: `./img/car/products/${color}-car.jpg`
    })
  };



  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <img className="w-100" src={this.state.pic} />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className="col-6 btn btn-danger"
                onClick={(event) => {
                  this.renderPic("red");
                }}
              >
                Red car
              </button>
            </div>
            <div className="col-6">
              <button
                className="col-6 btn btn-secondary"
                onClick={(event) => {
                  this.renderPic("silver");
                }}
              >
                Silver car
              </button>
            </div>
            <div className="col-6">
              <button
                className="col-6 btn btn-dark"
                onClick={(event) => {
                  this.renderPic("black");
                }}
              >
                Black car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
