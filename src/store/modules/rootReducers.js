import { combineReducers } from "redux";

import cartReducer from "./cart/reducer";
import productsReducer from "./Products/reducer";
import userReducer from "./user/reducer";

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
});
