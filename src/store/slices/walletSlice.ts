import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  balance: number;
}

const initialState: WalletState = {
  balance: 250,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    subtractBalance: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },

    addBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },

    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
  },
});

export const {
  subtractBalance,
  addBalance,
  setBalance,
} = walletSlice.actions;

export default walletSlice.reducer;
