import XucXac from "../../DemoRedux/BaiTapGameXucXac/XucXac";

const stateDefault = {
  banChon: "Tai",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/1.png" },
    { diem: 1, hinhAnh: "./img/2.png" },
    { diem: 1, hinhAnh: "./img/3.png" },
  ],
};

export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_TAI_XIU": {
      state.banChon = action.giaTri;
      return { ...state };
    }
    case "PLAY_GAME": {
      //Xu li random
      // console.log('playgame')
      //B1: tao ra mang xuc xac ngau nhien
      let mangXXNN = [];
      for (let i = 1; i <= 3; i++) {
        //Tao so ngau nhien
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Tao ra 3 object ngau nhien
        let xxNN = { diem: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png` };
        mangXXNN.push(xxNN);
      }
      //   Gan mang xuc xac ngau nhien bang mang xuc xac
      state.mangXucXac = mangXXNN;
      console.log("playgame");

      //Xu li ket quaa
      let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);

      if (
        (tongDiem >= 11 && state.banChon === "Tai") ||
        (tongDiem < 11 && state.banChon === "Xiu")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      //   return (...state)
    }
    default:
      return { ...state };
  }
};
