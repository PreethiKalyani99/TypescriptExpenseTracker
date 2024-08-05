import { AddTransactionProps } from "../types/types";

export function AddTransaction({singleTransactionHistory, handleTransactionHistory, handleInputChange}: AddTransactionProps){
   
    return (
        <div className="mt-5">
           <h3 className="add fs-5 fw-bold">Add New Transaction</h3>
           <hr className="line"/>
           <form onSubmit={handleTransactionHistory}>
                <div>
                    <label htmlFor="text-input" className="label-text mb-2 fw-bold">Text</label>
                    <input 
                        className="input-text mb-2"
                        type="text" 
                        id="text-input" 
                        name="text"
                        required
                        placeholder="Enter text..."
                        value={singleTransactionHistory.text} 
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="label-amount fw-bold">Amount</label>
                    <div className="info mb-2">(negative - expense, positive - income)</div>
                    <input
                        className="input-amount mb-3" 
                        type="number" 
                        id="amount"
                        name="amount" 
                        placeholder="Enter amount..."
                        required
                        value={singleTransactionHistory.amount} 
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="add-btn btn btn-primary" data-testid="add-transaction-btn">Add Transaction</button>
            </form> 
        </div>
    )
}