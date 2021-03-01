import React, { Component } from "react";

export default class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt={sanPham.hinhAnh}
            style={{ height: 300, width: 350 }}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>

            <button onClick={() => {}} className="btn btn-danger ml-2">
              Them gio hang
            </button>
          </div>
        </div>
      </div>
    );
  }
}
