import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "./BaiTapGameXucXac.css";

class BaiTapGameXucXac extends Component {
  // renderKetQua = ()=> {
  //     <div key ={item}></div>
  // }
  renderKetQua = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return;
    });
  };
  render() {
    return (
      <div className="bgGameXucXac">
        <h1 className="text-center">Bai Tap game xuc sac</h1>
        <XucXac />
    <div className="text-center display-4 text-warning">{this.props.ketQua}:{this.props.tongDiem}</div>
        <KetQuaTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let mangXucXac = state.baiTapGameReducer.mangXucXac;
  let tongDiem = mangXucXac.reduce((td, xucXac, index) => {
    return (td += xucXac.diem);
  }, 0);
  //Lay tong diem tao ra ket qua
  let ketQua = tongDiem > 11 ? "Tai" : "Xiu";
  //props tao ra tu ham mapStateToProps
  return {
    tongDiem: tongDiem,
    ketQua: ketQua,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapGameXucXac);
