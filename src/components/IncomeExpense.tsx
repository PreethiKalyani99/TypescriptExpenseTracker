import { IncomeExpenseProp } from "../types/types"

export function IncomeExpense({ income, expense }: IncomeExpenseProp){
    
    return(
        <>
            <div  className="row income-expense mt-3">
                <span className="row">
                    <h4 className="col income">Income</h4>
                    <h4 className="col">Expense</h4>
                </span>
                <span className="row">
                    <span className="col income-amount">Rs.{income}</span>
                    <span className="col expense-amount">Rs.{expense}</span>
                </span>
            </div>
        </>
    )
}