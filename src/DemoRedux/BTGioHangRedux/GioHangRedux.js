import React, { Component } from "react";
//Ket noi react component voi redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log(this.props.gioHang, "gioHang");
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Ten SP</th>
              <th>So luong </th>
              <th>Gia</th>
              <th>Thanh tien</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGioHang, index) => {
              return (
                <tr key={index}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>{spGioHang.soLuong}</td>
                  <td>{spGioHang.gia}</td>
                  <td>{spGioHang.gia * spGioHang.soLuong}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Ham chuyen state tren redux tro thanh props cua component
const mapStateToProps = (state) => {
  //Tao props tu state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};
//Ket noi giua component va redux
export default connect(mapStateToProps)(GioHangRedux);
