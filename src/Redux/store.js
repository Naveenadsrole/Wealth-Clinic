import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./slice/dropDownSlice";
import hamBurgerSlice from "./slice/hamBurger";

export const store = configureStore({
  reducer: {
    dropDowns: dropDownSlice,
    hamBurger: hamBurgerSlice,
  },
});
