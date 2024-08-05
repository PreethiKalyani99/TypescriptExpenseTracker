import { TransactionHistoryProps } from "../types/types"

export function IncomeExpense({ totalTransactionHistory }: TransactionHistoryProps){
    
    const {income, expense} = totalTransactionHistory.reduce((acc, cur) => {
        cur.transactionType === 'income' ? acc.income += cur.amount : acc.expense += cur.amount
        return acc
    }, {income: 0, expense: 0})
    
    return(
        <>
            <div  className="row income-expense mt-3">
                <span className="row">
                    <h4 className="col income">Income</h4>
                    <h4 className="col">Expense</h4>
                </span>
                <span className="row">
                    <span className="col income-amount">Rs.{income}</span>
                    <span className="col expense-amount">Rs.{expense.toString().length > 1 ? expense.toString().substring(1) : expense}</span>
                </span>
            </div>
        </>
    )
}