import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Transaction {
  id: string;
  username: string;
  game: string;
  betAmount: number;
  winAmount: number;
  timestamp: string;
  status: "win" | "loss";
}

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },

    clearTransactions: (state) => {
      state.transactions = [];
    },
  },
});

export const {
  addTransaction,
  clearTransactions,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
