type Transaction = {
    text: string
    amount: number
}

type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}

export function IncomeExpense({ totalTransactionHistory }: TransactionHistoryProps){
    let expense = 0, income = 0
    totalTransactionHistory.forEach(data => {
        let money = data.amount
        if(money < 0){
            expense += money
        }
        else{
            income += money
        }
    })
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