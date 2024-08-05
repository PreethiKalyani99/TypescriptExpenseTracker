type Transaction = {
    text: string
    amount: number
}

type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}
export function CurrentBalance({ totalTransactionHistory }: TransactionHistoryProps){
    let availableBalance: number = totalTransactionHistory.reduce((acc,cur) => {
        let money = cur.amount
        acc += money
        return acc
    }, 0)

    return (
        <>
            <h3 className="balance-text mt-5 text-uppercase fs-5">Your Balance</h3>
            <div className="balance-amount">Rs.<span className="ms-2">{availableBalance}</span></div>
        </>
    )
}