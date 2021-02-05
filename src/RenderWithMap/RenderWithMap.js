import React, { Component } from "react";

export default class RenderWithMap extends Component {
  mangSinhVien = [
    { ma: 1, ten: "Nguyen Van A" },
    { ma: 2, ten: "Nguyen Van B" },
    { ma: 3, ten: "Nguyen Van C" },
  ];


  renderSinhVien = () => {
    // const arrJSX = [];
    // for (let index = 0; index < this.mangSinhVien.length; index++) {
    //   let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
    //   arrJSX.push(tagP);
    // }
    // return arrJSX;
    const arrJSX = this.mangSinhVien.map((sinhVien, index) => {
      return <li key={index}>{sinhVien.ten}</li>;
    });
    return arrJSX;
  };

  render() {
    return (
      <div className="container">
        {/* // [<p key={1}>hello SI</p>, <p key={2}>Hello Phu</p>] */}
        {/* this.renderSinhVien(); */}
        <table className="table">
          <thead>
            <tr>
              <th>ma sinh vien </th>
              <th>ten sinh vien </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.mangSinhVien.map((sinhVien, index) => {
              return (
                <tr key={index}>
                  <td>{sinhVien.ma}</td>
                  <td>{sinhVien.ten}</td>
                  <td>
                    <button className="btn btn-danger">Xoa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
