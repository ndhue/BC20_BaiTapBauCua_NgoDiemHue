import { combineReducers } from "redux";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";

const rootReducer = combineReducers({
    BaiTapXucXacReducer: BaiTapXucXacReducer,
});

export default rootReducer;