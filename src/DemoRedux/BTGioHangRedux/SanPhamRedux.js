import React, { Component } from "react";
//Ket noi redux
import { connect } from "react-redux";
class SanPhamRedux extends Component {
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

            <button
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
              className="btn btn-danger ml-2"
            >
              Them gio hang
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Ham dung de lay state tu redux ve tao thanh props cua component
const mapStateToProps = (state) => {
  return {};
};

//Ham de tao ra props la ham xu ly su kien dua data tu component len redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      console.log("san pham dc click", sanPhamClick);
      //Tao ra spGioHang tu spClick
      const spGioHang = {
        ...sanPhamClick, soLuong:1
        //Them thuoc tinh soLuong vao spGioHang
      }
      //Dua du lieu len redux store
      const action ={
        type: 'THEM_GIO_HANG', // Thuoc tinh bat buoc khi gui du lieu len
        spGioHang: spGioHang
      }
      //Dung ham dispatch dua du lieu len reducer (redux store)
      dispatch(action)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
