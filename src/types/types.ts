export enum TransactionType {
    Expense = 'expense',
    Income = 'income'
}

export type Transaction = {
    text: string
    amount: number
    transactionType: TransactionType
}

export type TransactionHistoryProps = {
    totalTransactionHistory : Transaction[]
}

export type SingleTransactionProps = Transaction & {
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