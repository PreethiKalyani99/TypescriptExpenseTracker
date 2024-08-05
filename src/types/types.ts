export type Transaction = {
    text: string
    amount: number
}

export type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}

export type SingleTransactionProps = {
    id: number
    text: string
    amount: number
}