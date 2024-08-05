import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, TransactionHistoryProps } from "../types/types";

const initialState: TransactionHistoryProps = {
    totalTransactionHistory: JSON.parse(localStorage.getItem('transaction') || '[]')
  }
export const expenseTrackerSlice = createSlice({
    name: 'expenseTracker',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.totalTransactionHistory.push(action.payload)
            localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory))
        },
        deleteTransaction: (state, action: PayloadAction<number>) => {
            state.totalTransactionHistory = state.totalTransactionHistory.filter((transaction, index) => index !== action.payload)
            localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory))
        }
    }
})

export const {addTransaction, deleteTransaction} = expenseTrackerSlice.actions
export default expenseTrackerSlice.reducer