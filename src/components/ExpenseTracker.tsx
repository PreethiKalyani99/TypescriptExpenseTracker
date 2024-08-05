import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function ExpenseTracker(){
    const { totalTransactionHistory} = useSelector((state: RootState) => state.expenseTracker)
    return (
        <div className="parent-container">
            <h1 className="title">Expense Tracker</h1>
            <CurrentBalance
                totalTransactionHistory={totalTransactionHistory}
            />
            <IncomeExpense
                totalTransactionHistory={totalTransactionHistory}
            />
            <TransactionHistory 
                totalTransactionHistory={totalTransactionHistory}
            />
            <AddTransaction/>
        </div>
    )
}