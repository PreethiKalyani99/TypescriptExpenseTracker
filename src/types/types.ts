export type Transaction = {
    text: string
    amount: number
    transactionType: string
}

export type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}

export type SingleTransactionProps = {
    text: string
    amount: number
    id: number
}

export type AvailableBalanceProp = {
    availableBalance: number
}

export type IncomeExpenseProp = {
    income: number
    expense: number
}

export type AddTransactionProps = {
    singleTransactionHistory : {text: string; amount: string}
    handleTransactionHistory: (e: React.FormEvent<HTMLFormElement>) => void
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}