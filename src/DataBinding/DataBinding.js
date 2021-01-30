import React, { Component } from "react";
import style from './DataBinding.module.css'
//class component
export default class DataBinding extends Component {
  sinhVien = {
    id: 1,
    ten: "Nguyen Van a",
  };

  renderSinhVien = () => {
    //Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc thẻ component bao phủ
    return (
      <div>
        id:{this.sinhVien.id} - ten: {this.sinhVien.ten}
      </div>
    );
  };

  render() {
    //Phương thức
    let title = "hello cyber";
    //Chỉ cần đặt tên biến giống
    let sanPham = {
      ten: "Iphone 5s",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    };

    return (
      <div>
          <p className={`${style['txt-light']}`}>hahahahaahahah</p>
          <p className={`${style.textGreen}`}>abc</p>
          <p style ={{backgroundColor:'red', color:'white'}}></p>
        <div>{this.renderSinhVien()}</div>
        <p id="title">
          {title}
        </p>
        <div className="card text-white bg-primary">
          <img className="card-img-top" style={{width: '200px'}} src={sanPham.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
