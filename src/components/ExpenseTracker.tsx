import React, { useState } from "react";
import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addTransaction } from "../redux/expenseTrackerSlice";

export function ExpenseTracker(){
    const [singleTransactionHistory, setSingleTransactionHistory] = useState({
        text: '',
        amount: ''
    })

    const { totalTransactionHistory} = useSelector((state: RootState) => state.expenseTracker)
    const dispatch = useDispatch()

    const {income, expense} = totalTransactionHistory.reduce((acc, cur) => {
        cur.transactionType === 'income' ? acc.income += cur.amount : acc.expense += cur.amount
        return acc
    }, {income: 0, expense: 0})

    const availableBalance: number = totalTransactionHistory.reduce((acc,cur) => {
        acc += cur.amount
        return acc
    }, 0)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {name, value} = e.target
        setSingleTransactionHistory({
            ...singleTransactionHistory,
            [name]: value
        })
    }

    function handleTransactionHistory(e: React.FormEvent<HTMLFormElement>): void{
        e.preventDefault()
        const transaction = {
            text: singleTransactionHistory.text,
            amount: parseFloat(singleTransactionHistory.amount),
            transactionType: parseFloat(singleTransactionHistory.amount) < 0 ? 'expense' : 'income'
          }
        dispatch(addTransaction(transaction))
        setSingleTransactionHistory({
            text: '',
            amount: ''
        })
    }
    return (
        <div className="parent-container">
            <h1 className="title">Expense Tracker</h1>
            <CurrentBalance
                availableBalance={availableBalance}
            />
            <IncomeExpense
                income={income}
                expense={expense}
            />
            <TransactionHistory 
                totalTransactionHistory={totalTransactionHistory}
            />
            <AddTransaction
                singleTransactionHistory={singleTransactionHistory}
                handleTransactionHistory={handleTransactionHistory}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}