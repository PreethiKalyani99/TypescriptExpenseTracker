import { SingleTrasactionHistory } from "./SingleTransactionHistory";
 
type Transaction = {
    text: string
    amount: number
}

type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}
export function TransactionHistory({ totalTransactionHistory }: TransactionHistoryProps){

    return (
        <>
            <h3 className="mt-5 history-text fs-5 fw-bold">History</h3>
            <hr className="line"/>
            {totalTransactionHistory.length > 0 ? (
                totalTransactionHistory.map((transaction, index) => {
                    return <SingleTrasactionHistory
                        key={index}
                        id={index}
                        amount={transaction.amount}
                        text={transaction.text}
                    />
                    })
                ) : ''
            }
        </>
    )
}
