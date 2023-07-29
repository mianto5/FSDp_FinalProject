import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./redux/cartslice";

export default configureStore({
  reducer: {
    cartreducer,
  },
});
