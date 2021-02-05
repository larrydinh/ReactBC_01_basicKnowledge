import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";

export default class DemoProps extends Component {
  mangSinhVien = [
    { ma: "sv01", ten: "Khai", tuoi: 18 },
    { ma: "sv02", ten: "Khai", tuoi: 18 },
    { ma: "sv03", ten: "Khai", tuoi: 18 },
  ];
  renderSinhVien = () => {
    const result = this.mangSinhVien.map((sv, index) => {
      return (
        <div className="col-4" key={index}>
          <ThongTinSinhVien sinhVien={sv} />
        </div>
      );
    });
    return result;
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Thong tin sinh vien</h3>
        <div className="row">
          <div className="col-4">
            <ThongTinSinhVien
              maSV={this.mangSinhVien[0].ma}
              tenSV={this.mangSinhVien[0].ten}
            />
          </div>
          <div className="col-4">
            <ThongTinSinhVien
              maSV={this.mangSinhVien[1].ma}
              tenSV={this.mangSinhVien[1].ten}
            />
          </div>
          <div className="col-4">
            <ThongTinSinhVien bgColor="red" />
          </div>
        </div>
      </div>
    );
  }
}
