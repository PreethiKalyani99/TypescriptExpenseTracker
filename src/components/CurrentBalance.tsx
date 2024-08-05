import { TransactionHistoryProps } from "../types/types"

export function CurrentBalance({ totalTransactionHistory }: TransactionHistoryProps){
    let availableBalance: number = totalTransactionHistory.reduce((acc,cur) => {
        acc += cur.amount
        return acc
    }, 0)

    return (
        <>
            <h3 className="balance-text mt-5 text-uppercase fs-5">Your Balance</h3>
            <div className="balance-amount">Rs.<span className="ms-2">{availableBalance}</span></div>
        </>
    )
}