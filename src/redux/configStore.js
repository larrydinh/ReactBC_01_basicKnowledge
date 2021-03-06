import { combineReducers, createStore } from "redux";
import { baiTapGameReducer } from "./reducers/BaiTapGameXucXacReducer";
import { gioHangReducer } from "./reducers/GioHangReducer";


const rootReducer = combineReducers({
  // gioHangReducer: gioHangReducer,
  //ten gia tri trung ten thuoc tinh thi chi can ghi 1 thoi 
  gioHangReducer,
  //state theo tung nghiep vu
  // baiTapGameReducer: baiTapGameReducer
  baiTapGameReducer
});

export const store = createStore(rootReducer);
