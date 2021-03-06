import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderHinhAnh = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return <img key={index} src={xucXac.hinhAnh} width="50" />;
    });
  };

  render() {
    let { mangXucXac } = this.props;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("Tai");
              }}
              style={{ border: "none" }}
              className="bg-danger"
            >
              <div
                className="p-5 bg-danger text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                Tai
              </div>
            </button>
          </div>
          <div className="col-4">
            {/* <img src={mangXucXac[0].hinhAnh} width="50" />
            <img src={mangXucXac[1].hinhAnh} width="50" />
            <img src={mangXucXac[2].hinhAnh} width="50" /> */}
            {this.renderHinhAnh()}
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("Xiu");
              }}
              style={{ border: "none" }}
              className="bg-dark"
            >
              <div
                className="p-5 bg-secondary text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                Xiu
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    // stateGame:rootReducer.baitapGameReducer
    mangXucXac: rootReducer.baiTapGameReducer.mangXucXac,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (giaTri) => {
      const action = {
        type: "CHON_TAI_XIU",
        giaTri,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
