import {useState} from "react";
import { deleteTransaction } from "../redux/expenseTrackerSlice";
import { useDispatch } from "react-redux";
import { SingleTransactionProps } from "../types/types";


export function SingleTrasactionHistory(props: SingleTransactionProps){
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    return(
        <>
            <div className={`mb-2 delete-position`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                <button onClick={() => dispatch(deleteTransaction(props.id))} className={`delete-button ${isHover ? 'visible' : 'hidden'}`}>X</button>
                <div className={props.transactionType === 'expense' ? "transaction-container red" : 'transaction-container green'} data-testid="transaction-container">
                    <span className="text">{props.text}</span>
                    <span className="amount">{props.amount}</span>
                </div>
            </div>
        </>
    )
}