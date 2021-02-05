import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  render() {
    //this.props là thuộc tính có sẵn của react component

    // let{ten,tuoi,ma} = this.props.sinhVien;
    // {ten}, {tuoi}

    let{sinhVien} = this.props;
    // {sinhVien.ten}
    return (
      <div>
        <div
          style={{ backgroundColor: this.props.bgColor }}
          className="card text-left"
        >
          <img
            className="card-img-top"
            src="https://picsum.photos/100/180"
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{sinhVien?.ten}</h4>
            <p className="card-text">{sinhVien?.tuoi}</p>
            {/* optional: sinhVien?.ten  */}

          </div>
        </div>
      </div>
    );
  }
}

// State khac props cho nao: deu la thuoc tinh cua component de binding len giao dien
// this.state: quản lý các trạng thái của biến làm thay đổi giao diện
// this.props: nhận giá trị từ component cha trưyeenf vào
// this.state: có thể gán lại giá trị nhưng this.props thì ko cho gán lại
// props: read-only

// props truyen object dc, tuy nhien ko nen thay doi gia trij !!!!!
