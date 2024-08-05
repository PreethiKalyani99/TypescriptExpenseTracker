import { AvailableBalanceProp } from "../types/types"

export function CurrentBalance({availableBalance}: AvailableBalanceProp){

    return (
        <>
            <h3 className="balance-text mt-5 text-uppercase fs-5">Your Balance</h3>
            <div className="balance-amount">Rs.<span className="ms-2">{availableBalance}</span></div>
        </>
    )
}