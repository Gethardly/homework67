import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CORRECTPINCODE} from "../constants";

interface pincodeState {
  value: string;
  style: string;
}

const initialState: pincodeState = {
  value: '',
  style: '',
};

export const counterSlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    addNumbers: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    eraseOneSymbol: (state) => {
      state.value = state.value.slice(0,-1);
    },
    check: (state) => {
      if (state.value === CORRECTPINCODE) {
        state.style = 'bg-success text-white';
        window.alert('Access granted');
      } else {
        state.style = 'bg-danger text-white';
        window.alert('Access denied!');
        state.value = '';
      }
    },
  }
});

export const pincodeReducer = counterSlice.reducer;
export const {addNumbers, eraseOneSymbol,check} = counterSlice.actions;