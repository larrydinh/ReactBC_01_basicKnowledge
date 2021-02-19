import React, { Component } from "react";
import SanPhamDemo from "./SanPhamDemo";

export default class DemoQLSP extends Component {
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    }, //dung object luu tru thong tin
  };
  // data array
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  //   function
  renderSanPham = () => {
    return this.mangSanPham.map((sanPham, index) => {
      return (
        <div key={index} classname="col-4">
            <SanPhamDemo sanPham={sanPham} xemCT={this.xemChiTiet}/>
          {/* <div className="card text-left">
            <img
              className="card-img-top"
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
              style={{ height: 300 }}
            />
            <div className="card-body">
              <h4 className="card-title">{sanPham.tenSP}</h4>
              <p className="card-text">{sanPham.giaBan}</p>
            </div>
            <button onClick={() => {
                this.xemChiTiet(sanPham)
            }} className="btn btn-success">
              Xem chi tiết
            </button>
          </div> */}
        </div>
      );
    });
  };

// setState 
xemChiTiet = (sanPhamClick)=> {
    console.log(sanPhamClick);
    this.setState({spChiTiet:sanPhamClick})
}

  render() {
let {tenSP,hinhAnh,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom}= this.state.spChiTiet;


    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4">
    <h4 className="card-title text-center">{tenSP}</h4>
            <img
              className="card-img-top"
              src={hinhAnh}
              alt={hinhAnh}
              style={{ height: 300 }}
            />
          </div>
          <div className="col-8">
            <h3 className="text-center">Thong so ky thuat</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Man hinh</th>
    <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>He dieu hanh</th>
    <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera truoc</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
    <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
    <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
