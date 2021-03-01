const stateDefault = {
  gioHang: [],
};

export const gioHangReducer = (state = stateDefault, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //Xu ly thay doi state.gioHang tren redux
      //Buoc 1: sao chep gio hang ra array moi
      const gioHangUpdate = [...state.gioHang];
      //   Buoc 2: kiem tra action.spGioHang gui len tu component co trong state.gioHang chua ?
      let index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGioHang);
      }
      //Buoc 3: cap nhat lai state.gioHang => buoc nay giong nhu this.setState tai component
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    //   break;
    case "THAY_DOI_SO_LUONG": {
      const gioHangUpdate = [...state.gioHang];
      //Kiem tra san pham co trong gio hang khng
      let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate[index].soLuong += action.soLuong;
      }
      //Cap nhat gio hang
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_SAN_PHAM":{
      let gioHangUpdate = [...state.gioHang];
      //Xu li xoa gio hang
      gioHangUpdate=gioHangUpdate.filter(spGH=>spGH.maSP !==action.maSP)
      //cap nhat lai state gio hang
      state.gioHang = gioHangUpdate;
      return {...state}
    }
  }
  return { ...state };
};
