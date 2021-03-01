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
                  <td>
                    <button
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, 1);
                      }}
                      className="btn btn-primary mr-2"
                    >
                      +
                    </button>
                    {spGioHang.soLuong}
                    <button
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, -1);
                      }}
                      className="btn btn-primary ml-2"
                    >
                      -
                    </button>
                  </td>
                  <td>{spGioHang.giaBan}</td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td><button
                      onClick={() => {
                        this.props.xoaSanPham(spGioHang.maSP);
                      }}
                      className="btn btn-danger "
                    >
                    Xoa
                    </button></td>
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
//state dai dien cho rootReducer
const mapStateToProps = (state) => {
  //Tao props tu state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      console.log("object", maSP, soLuong);
      //Tao action
      const action = {
        type: "THAY_DOI_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };
      //Dua action len reducer
      dispatch(action);
    },
    xoaSanPham: (maSP) =>{
      //Tao action 
      const action ={ 
        type: "XOA_SAN_PHAM",
        maSP:maSP
      };
      //Dua du lieu len reducer
      dispatch(action);
    }
  };
};

//Ket noi giua component va redux
const GioHangConnectRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(GioHangRedux);
export default GioHangConnectRedux;
// khai niem HOC
