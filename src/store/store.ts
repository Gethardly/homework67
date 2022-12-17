import {configureStore} from "@reduxjs/toolkit";
import {pincodeReducer} from "../containers/pindodeReducer";

export const store = configureStore({
  reducer: {
    pinCode: pincodeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;