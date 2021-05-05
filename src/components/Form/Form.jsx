import React, { useContext } from 'react'
import { ItemsContext } from '../../context'

export function Form() {
    const itemsContext = useContext(ItemsContext)
    const { setPalletOrder, palletOrder, collectItems } = itemsContext
    
    return (
        <div>
            <form onSubmit={(event) => { 
                event.preventDefault()
                if (palletOrder) {
                    collectItems()
                } else {

                }
                }}>
                <label>
                    Pallet Order Number: <br/>
                    <input required type="text" name="palletOrder" value={palletOrder} onChange={(e) => setPalletOrder(e.target.value)}/><br/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}