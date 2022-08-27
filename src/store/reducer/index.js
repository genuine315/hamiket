import { combineReducers } from "redux";
import ModalReducer from "./ModalReducer";
import LengthPostReducer from "./LengthPostReducer";
import DataReducer from "./DataReducer";
import UserReducer from "./UserReducer";
import FilterReducer from "./FilterReducer";

const reducers = combineReducers({
  ModalReducer,
  LengthPostReducer,
  DataReducer,
  UserReducer,
  FilterReducer
});
export default reducers;
