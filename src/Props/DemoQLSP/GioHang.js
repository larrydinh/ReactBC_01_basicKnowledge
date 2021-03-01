import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang } = this.props;

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Ten SP</th>
              <th>Hinh anh</th>
              <th>Gia San Pham</th>
              <th>So luong</th>
              <th>Thanh tien</th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((spGH, index) => {
              console.log(gioHang);
              return (
                <tr key={index}>
                  <th>{spGH.maSP}</th>
                  <th>{spGH.tenSP}</th>
                  <th>
                    <img
                      src={spGH.hinhAnh}
                      alt={spGH.hinhAnh}
                      width="50"
                      height="50"
                    />
                  </th>
                  <th>{spGH.gia}</th>
                  <th>{spGH.soLuong}</th>
                  <th>{spGH.gia * spGH.soLuong}</th>
                  <th>
                    <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,1)}} className="btn btn-secondary mr-1">
                    <i class="fa fa-plus"></i></button>
                    
                    {spGH.soLuong}
                    <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,-1)}} className="btn btn-secondary ml-1" ><i class="fa fa-minus"></i></button>
                  </th>
                  <th> {spGH.gia * spGH.soLuong}</th>
                  <th>
                    <button
                      onClick={() => {
                        this.props.xoaGioHang(spGH);
                        //   console.log("huhu")
                      }}
                      className="btn btn-danger"
                    >
                      Xoa
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tong tien</td>
              <td>{this.tinhTongTien()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  tinhTongTien = () =>{
    let tongTien =this.props.gioHang.reduce((tongTien,spGH,index)=>{
      tongTien += spGH.soLuong * spGH.gia;
      return tongTien;
    },0);
    return tongTien.toLocaleString();
  }
}
